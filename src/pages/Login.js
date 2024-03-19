import React, { useState } from "react";
import { doLogIn } from "../services/user-services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../loggedInUser/loggeddetails";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
    // console.log("data", data);
  };

  const handleLogin = () => {

    const { username, password } = data;

    doLogIn({ username, password })
      .then((response) => {

        saveLogin(response.data,()=>{
            console.log("login details saved to the localstorage !",response.data)
            
  
          })
        toast.success("Login Successfull !");
        setData({
          username: "",
          password: "",
        });
        navigate("/home");
        console.log(response);
        // Handle successful login
      })
      .catch((error) => {
        toast.error("please fill correct details !");
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#e2e2e2" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span
                            className="h1 fw-bold mb-0 "
                            style={{ fontFamily: "cursive" }}
                          >
                            ScholarEase
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{
                            letterSpacing: "1px",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Login into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="username"
                            id="username"
                            name="username"
                            onChange={(e) => handleChange(e, "username")} // Fix here
                            value={data.username}
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => handleChange(e, "password")} // Fix here
                            className="form-control form-control-lg"
                            placeholder="password"
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>
                        <div>
                          <a
                            className="text-muted"
                            href="#!"
                            style={{ fontFamily: "cursive" }}
                          >
                            Forgot password ?
                          </a>
                          <p
                            className="mb-5 pb-lg-2 mt-3"
                            style={{ color: "#393f81", fontFamily: "cursive" }}
                          >
                            Don't have an account ?{" "}
                            <a
                              href="/signup"
                              style={{
                                color: "#393f81",
                                fontFamily: "cursive",
                              }}
                            >
                              Register here
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
