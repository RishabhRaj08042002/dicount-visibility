const mongoose=require('mongoose');
const db='mongodb://testU:z204L4Qoqz6URToh@13.235.111.30:27017/fitelo-staging?authSource=admin/fitelo-payment-service.orders';
mongoose.connect(db);
console.log("connected to compass");