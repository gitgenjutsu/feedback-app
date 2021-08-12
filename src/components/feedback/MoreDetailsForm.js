import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Container ,Form} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Navbar from '../layout/Navbar';
import { connect } from "react-redux";
import {MoreDetails} from "../../store/actions/studentActions";

class MoreDetailsForm extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            
course_delivering_on_your_expectations: "Yes",
enough_opportunities_to_apply: "Yes",
explanation_of_concepts_clear: "Yes",
instructor_knowledgeable_about_the_topics: "Yes",
            instructors_delivery_engaging: "Yes",
learning_valuable_information: "Yes",
        };
    }
    

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
                });
        };
    
        
    
        handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
            this.props.MoreDetails(this.state);
            this.props.history.push("/thankyou");
        }
    render() {
        return (
        <>
            <Navbar/>
            <div className="moreinfo-div">
                 <Container>
                <div className="moreDetails-div outer_shadow">
                    <Form onSubmit={this.handleSubmit}>
                        <h4 className="heading center">Please tell us some more.</h4>
                         <div className="questions">
                        <ol>
                            <li>Are you learning valuable information?</li>
                            <RadioGroup className="radioGrp"
                                name="course_delivering_on_your_expectations"
                                value={this.state.course_delivering_on_your_expectations} onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Are the explanation of concepts clear?</li>
                            <RadioGroup className="radioGrp" name="enough_opportunities_to_apply"
                               value={this.state.enough_opportunities_to_apply}
                                  onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Is the instructor's delivery engaging?</li>
                            <RadioGroup className="radioGrp"
                                 name="explanation_of_concepts_clear"
                                 value={this.state.explanation_of_concepts_clear} onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Are there enough opportunities to apply what you are learning?</li>
                            <RadioGroup className="radioGrp"
                            name="instructor_knowledgeable_about_the_topics"
                               value={this.state.instructor_knowledgeable_about_the_topics} onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>
                            
                            <li>Is this course delivering on your expectations?</li>
                            <RadioGroup  className="radioGrp" name="instructors_delivery_engaging" value={this.state.instructors_delivery_engaging} onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Is the instructor knowledgeable about the topics?</li>
                           <RadioGroup  className="radioGrp" name="learning_valuable_information" value={this.state.learning_valuable_information} onChange={this.handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>
                        </ol>
                    </div>
                     <div className="btn-div center">
                        <Button variant="contained" color="secondary" type="submit">
                            Submit
                        </Button>
                    </div>
                    </Form>
                </div>
                   
            </Container>
            </div>
            </>
    );
    }
}


// const mapStateToProps = (state) => {
//     return { auth: state.firebase.auth };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        MoreDetails: (detail) => {
            dispatch(MoreDetails(detail));
        },
    };
};

export default connect(null,mapDispatchToProps)(MoreDetailsForm);
