const { sendVerifiedEmail } = require('../helpers/mailer');
const { jwToken } = require('../helpers/token');
const jwt = require('jsonwebtoken');
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

    const user = await new Users({
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
    
    
    const emailToken = jwToken({id: user._id.toString()}, "30m")
    const url = `${process.env.BASE_URL}/activate/${emailToken}`
    
    sendVerifiedEmail(user.email,user.fName,url)

    const token = jwToken({id: user._id.toString()}, "7d")
    
    res.send({
      id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      token: token,
      verified: user.verified,
      message: "Registration success! Pleass active your email to start"
    })
    

    // console.log(emailToken);

  } catch (error) {
    res.status(404).json({
      message: "Can not create user"
    })
  }
}

exports.verifiedUser = async (req, res)=>{
  try{
    const {token} = req.body
    const user = jwt.verify(token, process.env.SECRET_TOKEN)

    const check = await Users.findById(user.id)

    if (check.verified === true){
      return res.status(400).json({
        message: "This email is already verified"
      })
    }else{
      await Users.findByIdAndUpdate(user.id, {verified: true})
      return res.status(200).json({
        message: "Account has been activated successfuly"
      })
    }

    // console.log(token);

  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

exports.login = async (req, res) =>{
  try {

    const {email, password} = req.body
    const user = await Users.findOne({email})
    if(!user){
      return res.status(400).json({
        message: "The email address you entered is not connected to an account"
      })
    }

    const check = await bcrypt.compare(password, user.password)
    if(!check){
      return res.status(400).json({
        message: "Invalied credentials. Please try again"
      })
    }

    const token = jwToken({id: user._id.toString()}, "7d")

    res.send({
      id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      token: token,
      verified: user.verified,
      message: "Login successfull."
    })
    
  } catch (error) {
    return res.status(404).json({
      message: error.message
    })
  }
}



// console.log((+new Date() * Math.random()).toString().substring(0, 1));