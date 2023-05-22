import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    signInWithEmailAndPassword(auth, formData.email, formData.password);
  };

  return (
    <div className="login">
      <div className="login__contents">
        <div className="login__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            height="30px"
            alt="Netflix Logo"
            className="logo"
          />
        </div>
        <div className="login__body">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="form-error">This field is required</span>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.email && (
              <span className="form-error">This field is required</span>
            )}
            <Button variant="contained" type="submit" color="secondary">
              Sign In
            </Button>
          </form>
          <p>New to Netflix? Sign up now.</p>
        </div>
        <div className="login__footer">
          <p className="footer__text">Questions? Contact us.</p>
          <div className="footer__links">
            <a href="#" className="footer__link">
              FAQ
            </a>
            <a href="#" className="footer__link">
              Help Center
            </a>
            <a href="#" className="footer__link">
              Terms of Use
            </a>
            <a href="#" className="footer__link">
              Privacy
            </a>
            <a href="#" className="footer__link">
              Cookie Preferences
            </a>
            <a href="#" className="footer__link">
              Corporate Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
