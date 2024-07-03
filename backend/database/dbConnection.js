import mongoose from "mongoose"
 export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"superset"
    }).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}