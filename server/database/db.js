import mongoose from "mongoose"
const Connection = async (email,password) =>{
    const URL =`mongodb+srv://${email}:${password}@cluster0.w4svv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
`
    try{
      await mongoose.connect(URL,{useNewUrlParser: true});
       console.log("database connected successfully");
    }
    catch(error){
    console.log("error while connecting with a database", error)
    }
}
export default Connection;