import React, { useState } from "react";
import "./Login.css"; // Import your CSS file
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const[machineId, setmachineId]=useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(email, first_name, last_name, password);
    try {
      // await axios.post(
      //   "http://localhost:4000/api/v1/auth/register",
      //   JSON.stringify({ name, phone, password }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
        // console.log(response.data);
        // console.log(response.accessToken);
        // console.log(JSON.stringify(response));
    } catch (err) {}
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + Phone;
    console.log(Phone);
    console.log(formatPh);

    signInWithPhoneNumber(auth, formatPh, appVerifier)
  .then((confirmationResult) => {
    window.confirmationResult = confirmationResult;
    setLoading(false);
    setShowOTP(true);
    toast.success("OTP sent successfully!");
  })
  .catch((error) => {
    console.error(error); // Log the error for debugging
    setLoading(false);
  });

  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        await handleSubmit();
        setUser(res.user);
        setLoading(false);
        alert("Successfully verified")
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {user ? (
            <h2 className="text-center text-white font-medium text-2xl">
              👍 Login Success
            </h2>
          ) : showOTP ? (
            <>
              <div className="container my-3 py-3">
                <h1 className="text-center fs-2">Enter your OTP</h1>
                <div className="row my-4 h-100">
                  <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <div className="form my-3">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        // disabled={false}
                        autoFocus
                        className="otp-container justify-content-center"
                        style={{
                          borderColor: "red", // Change border color
                          color: "blue", // Change text color
                          // Add any other styles you want to customize
                        }}
                      ></OtpInput>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={onOTPVerify}
                        className="my-2 mx-auto btn btn-dark"
                      >
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Verify OTP</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="login-container">
              <div className="login-box">
                <h2 className="instagram-logo">Sign Up</h2>
                <form>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter Your telegram username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <PhoneInput
                    country={"in"}
                    value={Phone}
                    onChange={setPhone}
                    placeholder="Phone"
                    autoComplete={false}
                    inputStyle={{
                      width: "300px",
                      height: "45px",
                      fontSize: "16px",
                    }}
                  />
                  <input
            className="input-field"
            type="text"
            placeholder="Machine id"
            value={machineId}
            onChange={(e) => setmachineId(e.target.value)}
          />
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="login-button"
                    id="sign-in-button"
                    onClick={onSignup}
                    disabled={loading}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    Sign Up
                  </button>
                </form>
                <div className="separator">
                  <span className="or-text">OR</span>
                </div>
                <button className="signup-button">
                  <div className="button-text">
                    Already a user? <br /> Click Here to Login
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Register;