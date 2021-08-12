// import React from 'react'
// import {Form, Button} from "react-bootstrap"
// import { useFormik } from "formik"
// import student from "../../../images/student.jpg"

// const initialValues = {
//   email:""
// }

// const onSubmit = values => {
//   console.log("Form data", values);
// }

// const validate = values =>{
//   //values.email
//   let errors = {}

//   if(!values.email){
//     errors.email = "Required"
//   }else if (!/^[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format"
//   }

//   return errors
// }


// export default function Forgetpassword() {

//   const formik = useFormik({
//       initialValues,
//       onSubmit,
//       validate
//   })


//   // console.log("Form values", formik.values);
//   // console.log("Form visited", formik.touched);

//     return (
//         <div className="container">
//           <div className="row">
//       <div className="col"></div>
//       <div className="col log-2">

//           <Form onSubmit={formik.handleSubmit}>
//   <Form.Group controlId="formBasicPassword">
//   <img src={student} alt="img not found"></img>
//     <h5>Forgot Your Password? Let Us Help You.</h5>
//     {/* <Form.Label>Email</Form.Label> */}
//     <Form.Control placeholder="Enter Your Register Email Address" 
//     type="email" 
//     id="email" 
//     name="email" 
//     onChange={formik.handleChange} 
//     value={formik.values.email}
//     onBlur={formik.handleBlur}
//     />
//     {formik.errors.email ? (
//     <div className="error">{formik.errors.email}</div>) : null}
//   </Form.Group>
 
  
//   <Button variant="primary" type="submit">
//     Send
//   </Button>
//   <div className="log-btn">
//    <a href="#">Log In</a>
//    </div>
// </Form>

// </div>
// <div className="col"></div>
// </div>
//         </div>
//     )
// }
