import React from "react";
import logoSignIn from "../images/LogosingIn.png";
import { Apiurl } from "../service/ApiRest";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    },
    error: false,
    errorMessage: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.form);
  };

  handleButton = () => {
    let url = Apiurl;
    axios
      .post(url, this.state.form)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response);
          window.location = "/";
        } else {
          this.setState({
            error: true,
            errorMessage: response.data.result.errorMessage,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          errorMessage:
            "Parece que hay un error en tu información, intentalo nuevamente",
        });
      });
  };
  render() {
    return (
      <div className="min-h-screen bg-hero-pattern bg-no-repeat flex justify-start">
        <div className="ml-52 max-w-md w-full mx-auto mt-20 p-6 ">
          <div className="font-semibold text-4xl mb-4 ml-32">Sign Up </div>
          <form onSubmit={this.handleSubmit} action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="password"
                placeholder="******"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="firstName"
                placeholder="Ana"
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="lastName"
                placeholder="Perez"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="email"
                placeholder="anaperez@g..."
                onChange={this.handleChange}
              ></input>
            </div>
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
              onClick={this.handleButton}
            >
              Submit
            </button>
          </form>
          <br></br>
          {this.state.error === true && (
            <div className="text-white w-full py-2 px-4 border border-red-300 bg-red-500 rounded mt-1">
              {this.state.errorMessage}
            </div>
          )}
        </div>
        <div className="">
          <img className="mr-24" src={logoSignIn} alt="logo-codeskills" />
        </div>
      </div>
    );
  }
}

export default SignUp;
