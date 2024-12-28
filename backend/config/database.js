import mongoose from "mongoose";


const connectDb = async ()=>{
  await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb connected...");
  }).catch((error)=>{
    console.log(error);
  })
};
export default connectDb;
