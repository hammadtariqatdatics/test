import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required..."),
  email: yup.string().email().required("Email is required..."),
  password: yup.string().required("Password is required..."),
});

export default userSchema;
