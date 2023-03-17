import React, { Fragment, useState } from 'react';
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmpassword,setConfirmPassword]=useState('');
  const[errors,setErrors]=useState({});
    

  function handleSubmit(event) {
    event.preventDefault();
  
    // create an object with the user's details
    const user = {
      username: username,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
  
    // validate the user's input
    const errors = validate(user);
  
    if (Object.keys(errors).length === 0) {
      // if there are no validation errors, clear the form and submit the data
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
  
      fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.href = '/login';
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
  
    // validate username
    if (!user.username.trim()) {
      errors.username = "Username is required";
    }
  
    // validate email
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
    }
  
    // validate password
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  
    // validate confirm password
    if (!user.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (user.confirmpassword !== user.password) {
      errors.confirmpassword = "Passwords do not match";
    }
  
    return errors;
  }

  return(
    <Fragment>
    <div>
    <div style={{backgroundImage:'url(https://img.freepik.com/free-photo/register-now-document-filling-form-concept_53876-121194.jpg?size=626&ext=jpg&ga=GA1.2.955878982.1678699792&semt=sph)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className="container mt-5">
      <div className="row mx-auto mt-5">
        <div className="mx-auto col-md-6 mt-5 pt-4">
          <div style={{backgroundColor:'lightgrey'}} className="card mb-5 p-2 shadow rounded">
            <div  className="card-body mt-2">
              <div  className="row mb-3">
                <h3 className="text-success text-center border-bottom border-success p-3">
                REGISTER FORM
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-2">
                  <label htmlFor="Email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control border-success shadow-none "
                    id="Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div className="mb-3 mt-2">
                  <label htmlFor="Email" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    className="form-control border-success shadow-none "
                    id="username"
                    aria-describedby="emailHelp"
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
                className="form-control border-success shadow-none"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="ConfirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="confirmpassword"
                name="confirmpassword"
                className="form-control border-success shadow-none"
                id="confirmPassword"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmpassword && (
                <span className="text-danger">{errors.confirmpassword}</span>
              )}
            </div>
            <div class="row mt-3">
                          
                           <div class="col-sm-3"></div>
                           <div class="col-sm-3"></div>
                           <div class="col-sm-3"></div>
                          <div style={{backgroundColor:'lightgreen'}} class="col-sm-3"><a href="/login" class="text-decoration-none mb-3 text-success fw-bold ">Already have an account?</a></div>
                          
                      </div>
            <button type="submit" className="btn btn-success mt-3">
              Register
            </button>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</Fragment>
  );
}
export default RegisterForm;
