import * as yup from "yup";
//
const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
export default LoginSchema;
