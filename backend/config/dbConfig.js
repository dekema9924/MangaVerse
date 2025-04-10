

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log(err);
})
