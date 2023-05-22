import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import "./signup.css";

const Signup = () => {
  const onSubmit = () => {
    console.log("I was submitted.");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="signup">
      <div className="signup__contents">
        <div className="signup__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            height="30px"
            alt="Netflix Logo"
            className="logo"
          />
          <Button variant="contained" type="submit" color="secondary">
            Sign In
          </Button>
        </div>

        <div className="signup__body">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
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
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && (
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
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
