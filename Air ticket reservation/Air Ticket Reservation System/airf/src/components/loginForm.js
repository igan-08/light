import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  
    // create an object with the user's details
    const user = {
      username: username,
      password: password,
    };
  
    // validate the user's input
    const errors = validate(user);
  
    if (Object.keys(errors).length === 0) {

      setUsername("");
      setPassword("");
      
      

      // if there are no validation errors, submit the data
      fetch("http://127.0.0.1:8000/api/register/")
        .then((response) => response.json())
        .then((data) => {
          const userMatch = data.find((storedUser) => storedUser.username === username);
          if (!userMatch) {
            // if the user's email is not found in the "registers" table
            setMessage("Username not found");
          } 
          else {
            // if the user's email is found in the "registers" table
            const storedPassword = userMatch.password;
            if (password === storedPassword) {
              // if the password matches the stored password
              setMessage("Login successful");
              alert("login successful");

              //store the data in db
              fetch("http://127.0.0.1:8000/api/login/",
              {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.href = '/FlightSearch';
        })
              // redirect to the dashboard or home page
             
            } else {
              // if the password does not match the stored password
              setMessage("Incorrect password");
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // if there are validation errors, set the errors state variable
      setErrors(errors);
    }
  }
  

  function validate(user) {
    let errors = {};

    // validate email
    if (!user.username.trim()) {
      errors.username = "Username is required";
    } 

    // validate password
    if (!user.password) {
      errors.password = "Password is required";
    } 
    return errors;
  }

  return (
    <div style={{backgroundImage:'url(https://img.freepik.com/free-photo/man-working-his-laptop_53876-88428.jpg?w=996&t=st=1678700471~exp=1678701071~hmac=1f78a9b76790dbce793a17b29aa53cf14685546b84e5a3a63f1910fcb2ab1687)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="container mt-5">
        <div className="row mx-auto mt-5">
          <div  className="mx-auto col-md-6 mt-5 pt-4">
            <div style={{backgroundColor:'lightgrey'}}  className="card mb-5 p-2 shadow rounded">
              <div className="card-body mt-2">
                <div className="row mb-3">
                  <h3 className="text-success text-center border-bottom border-success p-3">
                    LOGIN FORM
                  </h3>
                </div>
                <form onSubmit={handleSubmit} >
                  <div className="mb-3 mt-2">
                    <label htmlFor="Username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      name="Username"
                      placeholder="Enter your username"
                      className="form-control border-success shadow-none "
                      id="Username"
                      aria-describedby="usernameHelp"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && (
                      <span className="text-danger">{errors.username}</span>
                    )}
                  </div>
                  
                  <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control border-success shadow-none"
                  id="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
              <div class="row mt-3">
                            
                             <div class="col-sm-3"></div>
                             <div class="col-sm-3"></div>
                             <div class="col-sm-3"></div>
                            <div style={{backgroundColor:'lightgreen'}} class="col-sm-3"><a href="/register" class="text-decoration-none mb-3 text-success fw-bold ">Don't have an account?</a></div>
                            
                        </div>
              <button type="submit" className="btn btn-success mt-3">
                Login
              </button>
              {message && (
                <div className="mt-3">
                  <span className="text-success">{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
);

}

export default LoginForm;

