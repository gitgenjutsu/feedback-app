import React, { Component } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import vector from "../../images/01.png";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";
import { createStudent } from "../../store/actions/studentActions";

const validIDRegex = RegExp(
  /^[A-Z][A-Z]\/[A-Z][A-Z]\/[A-Z][A-Z]\/[\d]{2}-[\d]{2}\/[\d]{2}$/
);

const validEmailRegex = RegExp(
  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
);
const validPhoneRegex = RegExp(/^\d{10}$/);
const validStringRegex = RegExp(/\d/);

class StudentDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      course: "",
      name: "",
      phone: "",
      email: "",
      errors: {
        id: "",
        course: "",
        name: "",
        phone: "",
        email: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    
    let { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "id":
        errors.id =
          // value.length < 17
          validIDRegex.test(value) ? "" : "Invalid ID";
        break;
      case "course":
        errors.course = validStringRegex.test(value) ? "Invalid Course" : "";
        break;
      case "name":
        errors.name = validStringRegex.test(value) ? "Invalid Name" : "";
        break;
      case "phone":
        errors.phone = validPhoneRegex.test(value) ? "" : "Invalid Phone No.";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Invalid Email";
        break;
      default:
        break;
    }
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    let errors = this.state.errors;
    if (errors.id === "") {
      if (errors.name === "") {
        if (errors.course === "") {
          if (errors.phone === "") {
            if (errors.email === "") {
              this.props.createStudent(this.state);
              console.log(this.state);
              this.props.history.push("/feedback");
            }
          }
        }
      }
    }
  }

  componentDidMount() {
    this.nameInput.focus();
  }
  render() {
    const { errors } = this.state;
    return (
      <>
        <Navbar />
        <Container fluid className="body-bg">
          <Row className="row">
            <div className="center">
              <h4 className="heading">Lets Make Our Training Better</h4>
              <p>Be Expressive, Be Honest</p>
            </div>
            <Container>
              <section className="main" >
                <div className="form_div" sm={12} >
                  <Form onSubmit={this.handleSubmit} id="myForm">
                    <div className="form-group">
                      <div className="error-div">
                        <label className="label">Your Student ID</label>
                        {errors.id.length > 0 && (
                          <span className="error">{errors.id}</span>
                        )}
                      </div>
                      <input
                        type="text"
                        maxLength="17"
                        name="id"
                        ref={(input) => {
                          this.nameInput = input;
                        }}
                        value={this.state.id}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="AD/RH/WM/08-19/27"
                        required
                      />
                      <p>
                        You can check this on your i-card or contact us please.
                      </p>
                    </div>
                    <div className="form-group">
                      <div className="error-div">
                        <label className="label">Your Course</label>
                        {errors.course.length > 0 && (
                          <span className="error">{errors.course}</span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="course"
                        value={this.state.course}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div className="error-div">
                        <label className="label">Your Name</label>
                        {errors.name.length > 0 && (
                          <span className="error">{errors.name}</span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div className="error-div">
                        <label className="label">Your Mobile No.</label>
                        {errors.phone.length > 0 && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </div>
                      <input
                        type="text"
                        maxLength="10"
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div className="error-div">
                        <label className="label">Your Email Address</label>
                        {errors.email.length > 0 && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="btn-grp">
                      <Button
                        type="reset"
                        className="warning"
                        variant="warning"
                      >
                        Reset
                      </Button>
                      <Button variant="primary" type="submit">
                        Next
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="vector" sm={12} >
                  <img src={vector} alt="vector" />
                </div>
              </section>
            </Container>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student) => {
      dispatch(createStudent(student));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
