const router        = require('express').Router();
const verify        = require('../verifyToken');
const amqp          = require('amqplib');
const User          = require('../models/User');
const Room          = require('../models/Room');
const Transaction   = require('../models/Transaction');
const Contract      = require('../blockchain/contract');
var WebProvider     = require('../config/provider');
var web3            = new WebProvider().getInstance().web3;
var provider        = new WebProvider().getInstance().provider;
const Utils         = require('../utils/utils');
const {Status, TX_Status}  = require ('../utils/constants');


const messageQueueConnectionString = process.env.RABBITMQ_URL;

const confirmationNumber=5; // could be used to count number of conf needed once tx is sent on blockchain


const MessageBroker = require('../broker');

router.post('/book',verify, async (req, res) => {
    const user = await User.findById(req.user._id);
    try{

        let {resource, start, end, eventName} = req.body;
        const transaction = new Transaction({
            user: user._id,
            idSlot: getIdSlot(start, resource, user.company),
            status: TX_Status.Pending,
        })
        const savedTx = await transaction.save();

        const broker = await MessageBroker.getInstance();

        let requestId = savedTx._id;
        let requestData = req.body;

        await publishToChannel(broker.channel, { routingKey: "book", exchangeName: "processing", data: { requestId, requestData } });
        console.log("Published a request message, requestId:", requestId);

        return Utils.getJsonResponse('ok',200,'', savedTx, res);

    }catch(err){
        console.error(err);
        return Utils.getJsonResponse('error',400, err, '', res);
    }

})

router.post('/cancel',verify, async (req, res) => {
    const user = await User.findById(req.user._id);

    try{

        let {resource, start, end, eventName} = req.body;
        let idSlot = getIdSlot(start, resource, user.company);
        let found = await Room.isBooked(idSlot, Status.Booked, user.company);
        console.log('founnd', found)
        if(!found){
            return Utils.getJsonResponse('error',400, 'Room has to be booked to be able to cancel it', '', res);
        }
        const transaction = new Transaction({
            user: user._id,
            idSlot: getIdSlot(start, resource, user.company),
            status: TX_Status.Pending,
        })
        const savedTx = await transaction.save();
        const broker = await MessageBroker.getInstance();
        let requestId = savedTx._id;
        let requestData = req.body;

        await publishToChannel(broker.cancelChannel, { routingKey: "cancel", exchangeName: "processing", data: { requestId, requestData } });
        console.log("Published a request message, requestId:", requestId);

        return Utils.getJsonResponse('ok',200,'', savedTx, res);

    }catch(err){
        console.error(err);
        return Utils.getJsonResponse('error',400, err, '', res);
    }

})



router.get('/availibilities',verify, async (req, res) => {
    const user = await User.findById(req.user._id);

    try{
        console.log(user.company)
        let result = await Room.getAllAvailibilitiesByCompany(user.company);
        return Utils.getJsonResponse('ok',200,'', result, res);

    }catch(err){
        console.error(err);
        return Utils.getJsonResponse('error',400, err, '', res);
    }

})



const getIdSlot=(start, resourceId, idCompany) =>{
    return start+resourceId+idCompany;
}

// utility function to publish messages to a channel
function publishToChannel(channel, { routingKey, exchangeName, data }) {
    return new Promise((resolve, reject) => {
        channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function (err, ok) {
            if (err) {
                return reject(err);
            }

            resolve();
        })
    });
}



module.exports = router;