import React, {Component, useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import '../styles/App.css';

const App = () => {

  const [errorName , setErrorName] = React.useState("");
  const [errorEmail , setErrorEmail] = React.useState("");
  const [errorGender , setErrorGender] = React.useState("");
  const [errorPassword , setErrorPassword] = React.useState("");
  const [errorPhoneNo , setErrorPhoneNo] = React.useState("");
  const [errorMsg , setErrorMsg] = React.useState("");

  const [name , setName] = React.useState("");
  const [email , setEmail] = React.useState("");
  const [gender , setGender] = React.useState("");
  const [password , setPassword] = React.useState("");
  const [phoneNo , setPhoneNo] = React.useState("");

  const handleInputChangeName =(event)=>{
    setName(event.target.value);
  }
  const handleInputChangeEmail =(event)=>{
    setEmail(event.target.value);
  }
  const handleInputChangeGender =(event)=>{
    setGender(event.target.value);
    
  }
  const handleInputChangePassword =(event)=>{
    setPassword(event.target.value);
  }
  const handleInputChangePhoneNo =(event)=>{
    setPhoneNo(event.target.value);
  }


  const handleClick = () =>{
    console.log("My Gender is : ",gender);
    // name
    var lettersName = /^[A-Za-z]+$/;
    // var lettersEmail = /\S+@\S+/;
    var lettersNumber = /^[0-9\b]+$/;

    if(!name.match(lettersName)){
        // alert('Your name have accepted : you can try another');
        setErrorName("Only alphanumeric allowed");
        setErrorMsg("All Field are mendatory");
        // return true;
    }
    // else{
    //     setErrorName("");
    // }

    // email
    else if(!email.includes('@')){
      // alert('INVALID');
      setErrorEmail("Email must contain @");
      setErrorMsg("All Field are mendatory");
    }
    // else{
    //   setErrorEmail("");
    // }

    // phonep No

    else if(!phoneNo.match(lettersNumber) || phoneNo.length==10){
      // alert('INVALID');
      setErrorPhoneNo("Phone Number must contain only numbers");
      setErrorMsg("All Field are mendatory");
    }
    // else{
    //   setErrorPhoneNo("");
    // }

    // password
    else if(password.length <= 6){
      // if(password.length <= 6){
        setErrorPassword("Password must contain atleast 6 letters");
        setErrorMsg("All Field are mendatory");
      // }
      // else{
      //   setErrorPassword("");
      // }
      
    }
    // else{
    //   setErrorPassword("");
    // }


    // gender
    else if(gender==""){
      setErrorGender("Please identify as male, female or others");
      setErrorMsg("All Field are mendatory");
    }
    else{
      // setErrorGender("");
      setErrorMsg("no");
    }

    // else
    // {
    //     alert('Please input alphabet characters only');
    //     return false;
    // }


  }

  return (
    <div id="main">

        {/* <Button className="success">Success</Button> */}
       
        <Container>

          <div>HELLO PLEASE FILL THE FORM</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} data-testid = 'name' type="text" onChange={handleInputChangeName} placeholder="Enter Your Name" />
            <p className="text-danger">{errorName}</p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} data-testid = 'email' type="text" onChange={handleInputChangeEmail} placeholder="Enter Your Email address" />
            <p className="text-danger">{errorEmail}</p>
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control value={gender} data-testid = 'gender' as="select" onChange={handleInputChangeGender} defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Control>
            <p className="text-danger">{errorGender}</p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={phoneNo} data-testid = 'phoneNumber' type="text" onChange={handleInputChangePhoneNo} placeholder="Enter Your Phone Number" />
            <p className="text-danger">{errorPhoneNo}</p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} data-testid = 'password' type="password" onChange={handleInputChangePassword} placeholder="Enter Password" />
            <p className="text-danger">{errorPassword}</p>
          </Form.Group>

           <Button data-testid = 'submit' variant="primary" onClick={handleClick}>
            Submit
          </Button>

        </Form>
        </Container>
    

    {

      errorMsg==="no" ?
        <div>
          <h1>Welcome {name} </h1>
        </div>
      : null


    }

  </div>
  )
}


export default App;
