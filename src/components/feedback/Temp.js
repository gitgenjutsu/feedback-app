import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import vector from '../../images/01.jpg';
import { useHistory } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { connect } from "react-redux";
import { createStudent } from '../../store/actions/studentActions';




const StudentDetails = () => {
    let history = useHistory();
    const [student, setStudent] = useState({
        id: "",
        course: "",
        name: "",
        phone:"",
        email: ""
    });

    const { id, course, name, phone, email } = student;

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: [e.target.value] });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);
        // props.createStudent(student);
        createStudent(student);
        history.push("/feedback");
    }
    return (
        <>
        <Navbar />
        <Container fluid>
            <Row className="row">
                    <div className="center">
                        <h4 className="heading">Lets Make Our Training Better</h4>
                        <p>Be Expressive, Be Honest</p>
                    </div>
                <Container>
                   <section className="main" sm={12}>
                    <div className="form_div" sm={12} md={8}>
                        <Form onSubmit={handleSubmit}>
                             <div className="form-group">
                                <label className="label">Your Student ID</label>
                                <input type="text" maxLength="17" name="id" value={id} onChange={(e)=>handleChange(e)} className="form-control" placeholder="AD/RH/WM/08-19/27"/>
                                <p>You can check this on your i-card or contact us please.</p>
                            </div>
                            <div className="form-group">
                                <label className="label">Your Course</label>
                                <input type="text"  className="form-control" name="course" value={course} onChange={(e)=>handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label className="label">Your Name</label>
                                <input type="text"  className="form-control" name="name" value={name} onChange={(e)=>handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label className="label">Your Mobile No.</label>
                                <input type="text" maxLength="10" className="form-control" name="phone" value={phone} onChange={(e)=>handleChange(e)}/>
                            </div>
                             <div className="form-group">
                                <label className="label">Your Email Address</label>
                                <input type="email"  className="form-control" name="email" value={email} onChange={(e)=>handleChange(e)} />
                                </div>
                            <div className="btn-grp">
                                <Button type="reset" className="warning"variant="warning">Reset</Button>
                                <Button variant="primary" type="submit">Next</Button>
                            </div>
                  
                        </Form>
                        </div>
                        <div className="vector" sm={12} md={4}>
                            <img src={vector} alt="vector"/>
                        </div>
                </section>
               </Container>
            </Row>
        </Container>
    </>
    );
}

const mapStateToProps = (state) => {
    return { auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createStudent: (student) => {
            dispatch(createStudent(student));
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(StudentDetails);
