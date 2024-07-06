const nodemailer = require("nodemailer");
const {google} = require('googleapis');

const { OAuth2 } = google.auth
const oauth_link = "https://developers.google.com/oauthplayground"
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
)

exports.sendVerifiedEmail = (email, name, url)=>{
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  })
  const accessToken = auth.getAccessToken()
  const stmp = nodemailer.createTransport(
    {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL,
        clientId: MAILING_ID,
        clientSecret: MAILING_SECRET,
        refreshToken: MAILING_REFRESH,
        accessToken
      }
    }
  )

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Social App Verification",
    html: `<div style=" padding: 20px; border: 1px solid #ddd; border-radius: 5px; text-align: center; "> <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Hello ${name} What's Up</h1> <p style="color: #333; font-size: 16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Hello ${name} hope you are doing well. please confirm your verification email to start journey with us</p> <a href=${url} style="border: 1px solid #666; padding: 8px 15px; border-radius: 5px; text-decoration: none; color: #333; margin-top: 20px; display: inline-block; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" onmouseover="this.style.background = '#ddd'" onmouseleave="this.style.background = 'transparent'">Verify Email</a> </div>`
  }

  stmp.sendMail(mailOptions,(err,res)=>{
    if(err) return err;
    return res
  })

}