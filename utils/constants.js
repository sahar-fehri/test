const COLA = ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7", "CO8", "CO9", "C010"];
const PEPSI = ["PO1", "PO2", "PO3", "PO4", "PO5", "PO6", "PO7", "PO8", "PO9", "P010"];
const EVENT_NAMES = ["Book", "Cancel"];
const Status = { //should have been an enum with ts, maybe fix
    Booked :'booked',
    Canceled : 'canceled'
}
const TX_Status = { //should have been an enum with ts, maybe fix
    Pending :'pending',
    Confirmed : 'confirmed',
    Cancelled : 'cancelled'
}


module.exports = {COLA, PEPSI, EVENT_NAMES, Status, TX_Status};