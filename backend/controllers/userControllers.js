const { validateEmail, validenam } = require('../helpers/validation')
const Users = require('../models/usemodels')

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

    const User = await new Users({
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
    }).save()
    
    res.send(User)

  } catch (error) {
    res.status(404).json({
      message: "Can not create user"
    })
  }
}