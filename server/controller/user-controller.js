import User from '../model/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
export const signupUser = async (request,response)=>{
  

try{

  const hashedPassword = await bcrypt.hash(request.body.password,10);
  const user ={name: request.body.name, email: request.body.email, password: hashedPassword}
       const newUser= new User (user);
 await newUser.save();
 return response.status(200).json( {msg: 'signup successfull'})
}

catch(error){
return response.status(500).json({ msg: 'Error while signup'})
}
}