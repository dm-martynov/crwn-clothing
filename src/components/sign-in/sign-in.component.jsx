import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./sign-in.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          label="password"
          handleChange={handleChange}
          type="password"
          value={password}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign In with Google{" "}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
