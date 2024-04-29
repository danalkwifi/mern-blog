import User from '../models/user.model.js';
import bcrypts from 'bcryptjs';

export const signup = async(req, res) => {
  //console.log(req.body);
  const {username, email, password} = req.body;

  if(!username || !email || !password || username === '' || email === '' || password === ''){
    return res.status(400).json('All fields are required');
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
    res.status(500).json(error.message);
  }



  

  
  
};

