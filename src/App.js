import { useState} from "react";
import "./App.css";

const App = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });


  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.table(formData);
  };
  


  return (
    <div id="div0">
      <div id="div1">
        <nav>
          <h2>Welcome to React Form</h2>
        </nav>
        <div id="border">
          <form onSubmit={handleSubmit}>
            <div id="names">
              <br></br>
              <tr>
                <td><label htmlFor='firstname'>First Name : </label></td>
                <td><input name="firstName" type='text' onChange={handleChange} required /></td><br></br><br></br><br></br>
              </tr>
              <tr>
                <td><label htmlFor='lastname'>Last Name : </label></td>
                <td><input name='lastName' type='text' onChange={handleChange} required/></td><br></br><br></br><br></br>
              </tr>
              <tr>
                <td><label htmlFor='email'>E-mail : </label></td>
                <td><input name='email' type='text'  onChange={handleChange} required /></td><br></br><br></br><br></br>
              </tr>
              <tr>
                <td><label htmlFor="phoneNumber">Phone Number : </label></td>
                <td><input type="tel" name="phoneNumber" onChange={handleChange} pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required /></td><br></br><br></br><br></br>
              </tr>
              <tr>
                <td><label htmlFor='password'>Password : </label></td>
                <td><input name='password' type='password'  onChange={handleChange}  required /></td><br></br><br></br><br></br>
              </tr>
              <tr>
                <td><label htmlFor='confirmpassword'>Confirm Password : </label></td>
                <td><input name='confirmPassword' type='password' onChange={handleChange} required /></td><br></br><br></br><br></br>
              </tr>

              <div id="btn">
              <button id='btn0'>Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default App;
