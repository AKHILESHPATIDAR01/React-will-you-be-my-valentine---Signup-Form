import React, {Component, useState} from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
  const [gender , setGender] = React.useState("male");
  const [password , setPassword] = React.useState("");
  const [phoneNo , setPhoneNo] = React.useState("");

  const handleInputChange =(event)=>{
    var x = event.target.name;
    console.log(x);
    if(x == 'name'){
      console.log(name)
      setName(event.target.value);
    }
    if(x == 'email'){
      setEmail(event.target.value);
    }
    if(x == 'gender'){
      setGender(event.target.value);
    }
    if(x == 'phoneNo'){
      setPhoneNo(event.target.value);
    }
    if(x == 'password'){
      setPassword(event.target.value);
    }
  }


    const handleClick = (e) =>{
    
    var lettersName = /^[A-Za-z]+$/;
    var lettersNumber = /^[0-9\b]+$/;

    if(name.length==0){
        // alert('Your name have accepted : you can try another');
        setErrorName("Only alphanumeric allowed");
        setErrorMsg("All Field are mendatory");
    }

    // email
    else if(!email.includes('@')){
      // alert('INVALID');
      setErrorEmail("Email must contain @");
      setErrorName("");
      setErrorMsg("All Field are mendatory");
    }

    // phonep No

    else if(!phoneNo.match(lettersNumber) || phoneNo.length!=10){
      // alert('INVALID');
      setErrorPhoneNo("Phone Number must contain only numbers");
      setErrorMsg("All Field are mendatory");
      setErrorEmail("");
      setErrorName("");
    }
    else if(password.length <= 6){
        setErrorMsg("All Field are mendatory");
        setErrorPassword("Password must contain atleast 6 letters");
        setErrorPhoneNo("");
        setErrorEmail("");
        setErrorName("");     
    }
    // gender
    else if(gender!='male' && gender!='female' && gender!='other'){
      console.log("I am from gender");
      setErrorGender("Please identify as male, female or others");
      setErrorMsg("All Field are mendatory");
      setErrorPassword("");
        setErrorPhoneNo("");
        setErrorEmail("");
        setErrorName(""); 
    }
    else{
      // setErrorGender("");
      setErrorMsg("");
      console.log("SetErrorMsg");
      setErrorGender("");
      setErrorPassword("");
        setErrorPhoneNo("");
        setErrorEmail("");
        setErrorName(""); 
    }


  }

  return (
    <div id="main">

      <div className='container'>
      <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name='name' value={name} type="text" className="form-control" data-testid='name' id='name' onChange={handleInputChange} placeholder="Enter Your Name" />
            <p className="text-danger">{errorName}</p>
            
          </div>

          <div className="form-group">
            <label htmlFor="email">email</label>
            <input name='email' value={email} type="text" className="form-control" data-testid='email' id='email' onChange={handleInputChange} placeholder="Enter Your Email address" />
            <p className="text-danger">{errorEmail}</p>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select name='gender' className="form-control" id="gender" data-testid='gender' onChange={handleInputChange}>
              <option>male</option>
              <option>female</option>
              <option>other</option>
            </select>
            <p className="text-danger">{errorGender}</p>
          </div>

          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input name='phoneNo' value={phoneNo} type="text" className="form-control" data-testid='phoneNumber' id='phonenumber' onChange={handleInputChange} placeholder="Enter Your Phone Number" />
            <p className="text-danger">{errorPhoneNo}</p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name='password' value={password} type="password" className="form-control"  data-testid='password' id='password' onChange={handleInputChange} placeholder="Enter Password" />
            <p className="text-danger">{errorPassword}</p>
          </div>

          <button type='button' onClick={handleClick} data-testid = 'submit' className="btn btn-primary">Submit</button>
        </form>
      </div>

      {

        errorMsg==="" ?
          <div>
            <h1>Welcome {name} </h1>
          </div>
        : null
      }

  </div>
  )
}


export default App;


// import React, {Component, useState} from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import '../styles/App.css';

// const App = () => {

//   const [errorName , setErrorName] = React.useState("");
//   const [errorEmail , setErrorEmail] = React.useState("");
//   const [errorGender , setErrorGender] = React.useState("");
//   const [errorPassword , setErrorPassword] = React.useState("");
//   const [errorPhoneNo , setErrorPhoneNo] = React.useState("");
//   const [errorMsg , setErrorMsg] = React.useState("");

//   const [name , setName] = React.useState("");
//   const [email , setEmail] = React.useState("");
//   const [gender , setGender] = React.useState("");
//   const [password , setPassword] = React.useState("");
//   const [phoneNo , setPhoneNo] = React.useState("");

//   const handleInputChangeName =(event)=>{
//     setName(event.target.value);
//   }
//   const handleInputChangeEmail =(event)=>{
//     setEmail(event.target.value);
//   }
//   const handleInputChangeGender =(event)=>{
//     setGender(event.target.value);
    
//   }
//   const handleInputChangePassword =(event)=>{
//     setPassword(event.target.value);
//   }
//   const handleInputChangePhoneNo =(event)=>{
//     setPhoneNo(event.target.value);
//   }


//   const handleClick = () =>{
//     console.log("My Gender is : ",gender);
//     // name
//     var lettersName = /^[A-Za-z]+$/;
//     // var lettersEmail = /\S+@\S+/;
//     var lettersNumber = /^[0-9\b]+$/;

//     if(!name.match(lettersName)){
//         // alert('Your name have accepted : you can try another');
//         setErrorName("Only alphanumeric allowed");
//         setErrorMsg("All Field are mendatory");
//         // return true;
//     }
//     // else{
//     //     setErrorName("");
//     // }

//     // email
//     else if(!email.includes('@')){
//       // alert('INVALID');
//       setErrorEmail("Email must contain @");
//       setErrorMsg("All Field are mendatory");
//     }
//     // else{
//     //   setErrorEmail("");
//     // }

//     // phonep No

//     else if(!phoneNo.match(lettersNumber) || phoneNo.length==10){
//       // alert('INVALID');
//       setErrorPhoneNo("Phone Number must contain only numbers");
//       setErrorMsg("All Field are mendatory");
//     }
//     // else{
//     //   setErrorPhoneNo("");
//     // }

//     // password
//     else if(password.length <= 6){
//       // if(password.length <= 6){
//         setErrorPassword("Password must contain atleast 6 letters");
//         setErrorMsg("All Field are mendatory");
//       // }
//       // else{
//       //   setErrorPassword("");
//       // }
      
//     }
//     // else{
//     //   setErrorPassword("");
//     // }


//     // gender
//     else if(gender==""){
//       setErrorGender("Please identify as male, female or others");
//       setErrorMsg("All Field are mendatory");
//     }
//     else{
//       // setErrorGender("");
//       setErrorMsg("no");
//     }

//     // else
//     // {
//     //     alert('Please input alphabet characters only');
//     //     return false;
//     // }


//   }

//   return (
//     <div id="main">

//         {/* <Button className="success">Success</Button> */}
       
//         <Container>

//           <div>HELLO PLEASE FILL THE FORM</div>
//         <Form>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Name</Form.Label>
//             <Form.Control value={name} data-testid = 'name' type="text" onChange={handleInputChangeName} placeholder="Enter Your Name" />
//             <p className="text-danger">{errorName}</p>
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control value={email} data-testid = 'email' type="text" onChange={handleInputChangeEmail} placeholder="Enter Your Email address" />
//             <p className="text-danger">{errorEmail}</p>
//           </Form.Group>

//           <Form.Group controlId="formGridState">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control value={gender} data-testid = 'gender' as="select" onChange={handleInputChangeGender} defaultValue="Choose...">
//               <option>Choose...</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </Form.Control>
//             <p className="text-danger">{errorGender}</p>
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control value={phoneNo} data-testid = 'phoneNumber' type="text" onChange={handleInputChangePhoneNo} placeholder="Enter Your Phone Number" />
//             <p className="text-danger">{errorPhoneNo}</p>
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Password</Form.Label>
//             <Form.Control value={password} data-testid = 'password' type="password" onChange={handleInputChangePassword} placeholder="Enter Password" />
//             <p className="text-danger">{errorPassword}</p>
//           </Form.Group>

//            <Button data-testid = 'submit' variant="primary" onClick={handleClick}>
//             Submit
//           </Button>

//         </Form>
//         </Container>
    

//     {

//       errorMsg==="no" ?
//         <div>
//           <h1>Welcome {name} </h1>
//         </div>
//       : null


//     }

//   </div>
//   )
// }


// export default App;


// import React, {Component, useState} from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import '../styles/App.css';

// const App = () => {

//   const [errorName , setErrorName] = React.useState("");
//   const [errorEmail , setErrorEmail] = React.useState("");
//   const [errorGender , setErrorGender] = React.useState("");
//   const [errorPassword , setErrorPassword] = React.useState("");
//   const [errorPhoneNo , setErrorPhoneNo] = React.useState("");
//   const [errorMsg , setErrorMsg] = React.useState("");

//   const [name , setName] = React.useState("");
//   const [email , setEmail] = React.useState("");
//   const [gender , setGender] = React.useState("Male");
//   const [password , setPassword] = React.useState("");
//   const [phoneNo , setPhoneNo] = React.useState("");

//   const handleInputChange =(event)=>{
//     var x = event.target.name;
//     if(x == 'name'){
//       console.log("aaa")
//       setName(event.target.value);
//     }
//     if(x == 'email'){
//       setEmail(event.target.value);
//     }
//     if(x == 'gender'){
//       setGender(event.target.value);
//     }
//     if(x == 'phoneNo'){
//       setPhoneNo(event.target.value);
//     }
//     if(x == 'password'){
//       setPassword(event.target.value);
//     }

//     // setName(event.target.value);
//   }
//   // const handleInputChangeEmail =(event)=>{
//   //   setEmail(event.target.value);
//   // }
//   // const handleInputChangeGender =(event)=>{
//   //   setGender(event.target.value);
    
//   // }
//   // const handleInputChangePassword =(event)=>{
//   //   setPassword(event.target.value);
//   // }
//   // const handleInputChangePhoneNo =(event)=>{
//   //   setPhoneNo(event.target.value);
//   // }


//   const handleClick = () =>{
//     console.log("My Gender is : ",gender);
//     // name
//     var lettersName = /^[A-Za-z]+$/;
//     // var lettersEmail = /\S+@\S+/;
//     var lettersNumber = /^[0-9\b]+$/;

//     if(!name.match(lettersName)){
//         // alert('Your name have accepted : you can try another');
//         setErrorName("Only alphanumeric allowed");
//         setErrorMsg("All Field are mendatory");
//         // return true;
//     }
//     // else{
//     //     setErrorName("");
//     // }

//     // email
//     else if(!email.includes('@')){
//       // alert('INVALID');
//       setErrorEmail("Email must contain @");
//       setErrorMsg("All Field are mendatory");
//     }
//     // else{
//     //   setErrorEmail("");
//     // }

//     // phonep No

//     else if(!phoneNo.match(lettersNumber) || phoneNo.length==10){
//       // alert('INVALID');
//       setErrorPhoneNo("Phone Number must contain only numbers");
//       setErrorMsg("All Field are mendatory");
//     }
//     // else{
//     //   setErrorPhoneNo("");
//     // }

//     // password
//     else if(password.length <= 6){
//       // if(password.length <= 6){
//         setErrorPassword("Password must contain atleast 6 letters");
//         setErrorMsg("All Field are mendatory");
//       // }
//       // else{
//       //   setErrorPassword("");
//       // }
      
//     }
//     // else{
//     //   setErrorPassword("");
//     // }


//     // gender
//     else if(gender==""){
//       setErrorGender("Please identify as male, female or others");
//       setErrorMsg("All Field are mendatory");
//     }
//     else{
//       // setErrorGender("");
//       setErrorMsg("no");
//     }

//     // else
//     // {
//     //     alert('Please input alphabet characters only');
//     //     return false;
//     // }


//   }

//   return (
//     <div id="main">

//         {/* <Button className="success">Success</Button> */}
       
//         <Container>

//           <div>HELLO PLEASE FILL THE FORM</div>
//         <Form>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control value={name} name="name" data-testid='name' type="text" onChange={handleInputChange} placeholder="Enter Your Name" />
//             <p className="text-danger">{errorName}</p>
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control value={email} name="email" data-testid='email' type="text" onChange={handleInputChange} placeholder="Enter Your Email address" />
//             <p className="text-danger">{errorEmail}</p>
//           </Form.Group>

//           <Form.Group controlId="formGridState">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control value={gender} name="gender" data-testid='gender' as="select" onChange={handleInputChange} >
//               {/* <option>Choose...</option> */}
//               <select>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
              
//             </Form.Control>
//             <p className="text-danger">{errorGender}</p>
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control value={phoneNo} name="phoneNo" data-testid='phoneNumber' type="text" onChange={handleInputChange} placeholder="Enter Your Phone Number" />
//             <p className="text-danger">{errorPhoneNo}</p>
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control value={password} name="password" data-testid='password' type="password" onChange={handleInputChange} placeholder="Enter Password" />
//             <p className="text-danger">{errorPassword}</p>
//           </Form.Group>

//            <Button data-testid = 'submit' variant="primary" onClick={handleClick}>
//             Submit
//           </Button>

//         </Form>
//         </Container>
    

//     {

//       errorMsg==="no" ?
//         <div>
//           <h1>Welcome {name} </h1>
//         </div>
//       : null


//     }

//   </div>
//   )
// }


// export default App;
