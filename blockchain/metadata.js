
const ADDRESS = '0x71b52C30e2f9B1f1B2EEBC205E353C4313AC3BB4';
const ABI = [{"inputs":[{"internalType":"bytes32[10]","name":"_cola","type":"bytes32[10]"},{"internalType":"bytes32","name":"_idCola","type":"bytes32"},{"internalType":"bytes32[10]","name":"_pepsi","type":"bytes32[10]"},{"internalType":"bytes32","name":"_idPepsi","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"idCompany","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"idRoom","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"start","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"end","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"idSlot","type":"bytes32"}],"name":"Book","type":"event","signature":"0x1ae79010d508d013e6e4aa048591055aaa1a3bd549ebea567187f6ebb655f22c"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"idCompany","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"idRoom","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"start","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"end","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"idSlot","type":"bytes32"}],"name":"Cancel","type":"event","signature":"0x322cbf5724c02f11f9825c070df5d8ef220a6019fbdf606f5131696c57f0d25c"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Done","type":"event","signature":"0x6bb841348c5a71169a2db8779d29699afa576c107c1bf7c33c3193ae1e980ba2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"SLOT","type":"event","signature":"0x8c2d1ffd05da0c5f9fab35c576082c42bd75e8f4fa12fa08d1c725cad5a8b403"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"COLA","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd9e1ff88"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PEPSI","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe8efa188"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"idCompany","type":"bytes32"},{"internalType":"bytes32","name":"idRoom","type":"bytes32"},{"internalType":"bytes32","name":"start","type":"bytes32"},{"internalType":"bytes32","name":"end","type":"bytes32"},{"internalType":"bytes32","name":"idSlot","type":"bytes32"}],"name":"book","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc12bbaad"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"idCompany","type":"bytes32"},{"internalType":"bytes32","name":"idRoom","type":"bytes32"},{"internalType":"bytes32","name":"start","type":"bytes32"},{"internalType":"bytes32","name":"end","type":"bytes32"},{"internalType":"bytes32","name":"idSlot","type":"bytes32"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa3a04219"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"idCompany","type":"bytes32"},{"internalType":"bytes32","name":"idSlot","type":"bytes32"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0fe578ee"}];
module.exports = { ABI, ADDRESS };