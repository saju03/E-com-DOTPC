const  mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})


mongoose.connection.once('open',()=>console.log('database connection success')).on('error',error=>{
    console.log(error);
})

