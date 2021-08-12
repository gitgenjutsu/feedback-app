import React from 'react'
import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import student from '../../../images/student.jpg'

const initialValues = {
  username: '',
  password: '',
}

const onSubmit = (values) => {
  console.log('Form data', values)
}

const validate = (values) => {
  let errors = {}

  if (!values.username) {
    errors.username = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }
}

 function LogIn() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  console.log('Form errors', formik.errors)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col logform">
            <Form className="container" onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formBasicPassword">
                <img src={student} alt="img"></img>
                <h3>Log In</h3>
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  placeholder="Username"
                  type="text"
                  id="Username"
                  name="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />

                <Form.Control
                  placeholder="Password"
                  type="Password"
                  id="Password"
                  name="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
              <div className="log-btn">
                <a href="Login.js">Forget Password</a>
              </div>
            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}
export default LogIn;