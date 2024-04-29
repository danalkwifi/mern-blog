import User from '../models/user.model.js';
import bcrypts from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

//next to use the middleware
export const signup = async(req, res, next) => {
  //console.log(req.body);
  const {username, email, password} = req.body;

  if(!username || !email || !password || username === '' || email === '' || password === ''){
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcrypts.hashSync(password, 10); //the 10 is the number of salt

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try{
    await newUser.save();
    res.json('Signup succefful');
  } catch (error) {
    next(error);
}



  

  
  
};

