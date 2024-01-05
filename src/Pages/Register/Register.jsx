import React from "react";
import InputFeild from "../../Components/InputFeild/InputFeild.jsx";
import InputSelect from "../../Components/InputSelect/InputSelect.jsx";
import InputPassword from "../../Components/InputPassword/InputPassword.jsx";
import "./Register.css";
const Register = () => {
  return (
    <div className="my-container">
      <form className="seller-register-form">
        <h3>Register now with few easy steps!</h3>
        <h1>REGISTRATION FORM</h1>
        <div></div>
        <h6>
          Note: Please make sure to fill in the form with your actual
          information or else your account may become banned or suspended
        </h6>
        <div className="seller-register-form-input-box">
          <h2>BASIC DETAILS</h2>
          <div>
            <InputFeild />
            <InputFeild />
            <InputFeild />
            <InputFeild />
            <InputFeild />
          </div>
          <div>
            <InputSelect />
            <InputSelect />
            <InputSelect />
            <InputFeild />
          </div>
        </div>
        <div className="seller-register-form-input-box">
          <h2>ACCOUNT</h2>
          <InputPassword />
          <InputPassword />
        </div>
      </form>
    </div>
  );
};

export default Register;
