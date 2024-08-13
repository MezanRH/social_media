import * as Yup from "yup";

export const signUp = Yup.object({
  fName: Yup.string().min(3).max(20).required("Please Enter Your First Name"),
  lName: Yup.string().min(3).max(20).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string().min(8).required("Please Enter Valid Email"),
  gender: Yup.string().required("Please Select Gender"),
})