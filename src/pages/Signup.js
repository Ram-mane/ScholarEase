import React from "react";
import Base from "./Base";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { signUp } from "../services/user-services";
import { toast } from "react-toastify";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
    username: "",
    checkbox:""
  });
  const navigate = useNavigate();

  // useEffect(()=>{console.log(data);},[data])

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
    console.log("data", data);
  };

  // submit form
  const submitForm = async (event) => {
    event.preventDefault();

   if(data.email.trim()===''|| data.name.trim()==='' || data.password.trim()===''){
    toast.error("fill the required fields ")
    return;
   }

   try {
    const response = await signUp(data);
    body: JSON.stringify(data);

    const result = response.data;
    console.log(result);
    const userId = result.id;
    toast.success(`${result.name} you have registered successfully  !`);
          navigate("/login");


  //   if (result.success === true) {
  //     // Wait for the toast to close (500 milliseconds) and then navigate to the login page
  //     setTimeout(() => {
  //       // Navigate to the login page
  //       navigate("/home");
  //     }, 3500);
  //   }
    setData({
      name: "",
      email: "",
      password: "",
      mobileNo: "",
      gender: "",
      cpassword: "",
      checkbox:''
    });
  } catch (error) {
    console.error(error);
    console.log("Error log");
 
  }
}

    // reset data
    const resetData = () => {
      setData({
        name: "",
        email: "",
        password: "",
        phone_no: "",
        gender: "",
        about: "",
      });
    };
    return (
      <>
        <section className="vh-100 border-0" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 border-0">
            <div className="row d-flex justify-content-center align-items-center h-100 border-0">
              <div className="col-lg-12 col-xl-11 border-0">
                <div
                  className="card text-black border-0"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5 border-0">
                    <div className="row justify-content-center border-0">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 border-0">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4 border-0" onSubmit={submitForm} >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Your Name"
                                required
                                onChange={(e) => handleChange(e, "name")}
                                value={data.name}
                              />
                              {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Your Email"
                                onChange={(e) => handleChange(e, "email")}
                                value={data.email}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="mobileNo"
                                name="mobileNo"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Mobile No"
                                onChange={(e) => handleChange(e, "mobileNo")}
                                value={data.mobileNo}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="gender"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Gender"
                                name="gender"
                                onChange={(e) => handleChange(e, "gender")}
                                value={data.gender}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="password"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => handleChange(e, "password")}
                                value={data.password}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="cpassword"
                                className="form-control border-top-0 p-2 bg-light"
                                placeholder="Confirm Password"
                                name="confirm password"
                                onChange={(e) =>
                                  handleChange(e, "confirm password")
                                }
                                value={data.password}
                              />
                            </div>
                          </div>

                          <div className=" ">
                          <p class="mb-5 pb-lg-2 mt-2"  style={{color: "#393f81", fontFamily:'cursive'}}>
                          Already have an account ?{" "}
                          <a href="/login" style={{color: "#393f81" , fontFamily:'cursive'}}>
                            Login here
                          </a>
                        </p>
                        <div className="d-flex  mx-4 mb-3 mb-lg-4">
                          
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-lg ms-5 "
                              onClick={submitForm}
                            >
                              Register
                            </button>
                           
                          </div>
                          </div>
                          
                          
                         
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  
};
export default SignUp;
