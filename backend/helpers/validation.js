const User = require('../models/usemodels')

exports.validateEmail = (email)=>{
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

exports.validenam = (text, min, max)=>{
  if(text.length < min || text.length > max){
    return false
  }else{
    return true
  }
}