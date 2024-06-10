const { sendVerifiedEmail } = require('../helpers/mailer');
const { jwToken } = require('../helpers/token');
const { validateEmail, validenam, validateUsernaem } = require('../helpers/validation')
const Users = require('../models/usemodels')
const bcrypt = require('bcrypt');


exports.newUser = async (req, res)=>{
  try {
    const {
      fName,
      lName,
      username,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      verified
    } = req.body

    if(!validateEmail(email)){
      return res.status(400).json({
        message: "Invalid Email Address"
      })
    }

    const checkMail = await Users.findOne({email})

    if(checkMail){
      return res.status(400).json({
        message: "Email Already Exiest"
      })
    }

    if(!validenam(fName, 3, 15)){
      return res.status(400).json({
        message: "Firstname should be minumam 3 and max 15 characters"
      })
    }
    
    if(!validenam(lName, 3, 15)){
      return res.status(400).json({
        message: "Lastname should be minumam 3 and max 15 characters"
      })
    }
    if(!validenam(password, 8, 40)){
      return res.status(400).json({
        message: "password should be minumam 8 and max 40 characters"
      })
    }

    // bcrypt-password
    const crypted = await bcrypt.hash(password, 10)

    // console.log(crypted);

    // validate username
    let tempUsername = fName + lName
    let finalUsername = await validateUsernaem(tempUsername)

    // return

    const User = await new Users({
      fName,
      lName,
      username: finalUsername,
      password: crypted,
      email,
      bMonth,
      bDay,
      bYear,
      gender,
      verified
    }).save()
    
    const emailToken = jwToken({id: User._id.toString()}, "30")
    const url = `${process.env.BASE_URL}/activate/${emailToken}`
    sendVerifiedEmail(User.email, User.fName, url)
    
    res.send(User)

    console.log(emailToken);

  } catch (error) {
    res.status(404).json({
      message: "Can not create user"
    })
  }
}


// console.log((+new Date() * Math.random()).toString().substring(0, 1));