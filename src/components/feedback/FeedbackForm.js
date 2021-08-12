import React,{Component} from "react";
import { Container, Form } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";
import{Feedback} from "../../store/actions/studentActions";



const checkboxes1 = [
  { id: 1, text: "In-depth Explanation" },
  { id: 2, text: "Applicable to the Real World" },
  { id: 3, text: "Comprehensive Curriculum" },
  { id: 4, text: "Short & Sweet" },
  { id: 5, text: "Slow & Steady Pace" },
  { id: 6, text: "Swift Pace" },
  { id: 7, text: "Enlightening" },
  { id: 8, text: "Nothing" }
];

const checkboxes2 = [
  { id: 9, text: "Direct & to-the-point" },
  { id: 10, text: "Experienced" },
  { id: 11, text: "Friendly" },
  { id: 12, text: "Responsive" },
  { id: 13, text: "Fun Loving" },
  { id: 14, text: "Engaging" },
  { id: 15, text: "Nothing" }
];

const checkboxes3 = [
  { id: 16, text: "Accent (way of his/her speaking) is hard to understand" },
  { id: 17, text: "More Detail" },
  { id: 18, text: "More Exercises" },
  { id: 19, text: "More Energy" },
  { id: 20, text: "Slow Down Pace" },
  { id: 21, text: "Speed Up Pace" },
  { id: 22, text: "More Real-World Applications" },
  { id: 23, text: "Simply, I Don't have any issues" }
];

class FeedbackForm extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
      What_did_you_like_in_the_course: [],
      
      What_did_you_like_about_the_instructor: [],

      How_could_the_course_be_improved: []

    };


  }

   handleChange = (id,text) => {
    const What_did_you_like_in_the_course = this.state.What_did_you_like_in_the_course;
    const What_did_you_like_about_the_instructor = this.state.What_did_you_like_about_the_instructor;
    const How_could_the_course_be_improved = this.state.How_could_the_course_be_improved;

    // Find index
    const findIdx = What_did_you_like_in_the_course.indexOf(id);
     const findIdx2 = What_did_you_like_about_the_instructor.indexOf(id);
     const findIdx3 = How_could_the_course_be_improved.indexOf(id);
     console.log("Id values: ",id);
    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if(id<9){
      if (findIdx > -1) {
      What_did_you_like_in_the_course.splice(findIdx, 1);
    } else {
      What_did_you_like_in_the_course.push(text);
    }
    }else if(id<16){
      if (findIdx2 > -1) {
      What_did_you_like_about_the_instructor.splice(findIdx2, 1);
    } else {
      What_did_you_like_about_the_instructor.push(text);
    }
    }else if(id<24){
      if (findIdx3 > -1) {
      How_could_the_course_be_improved.splice(findIdx3, 1);
    } else {
      How_could_the_course_be_improved.push(text);
    }
    }

    this.setState({
      What_did_you_like_in_the_course: What_did_you_like_in_the_course,
      What_did_you_like_about_the_instructor: What_did_you_like_about_the_instructor,
      How_could_the_course_be_improved: How_could_the_course_be_improved
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.Feedback(this.state);
    this.props.history.push("/moredetails");
  }
  render() {
    const { What_did_you_like_in_the_course, What_did_you_like_about_the_instructor,How_could_the_course_be_improved} = this.state;
    return (
    <div className='feedback-div'>
    <Navbar/>
      <Container className='form-container'>
      <h4 className='heading center'>
        Great! Glad You are Participating in Feedback Drive!
      </h4>
        <Form onSubmit={this.handleSubmit}>
          <div className='form-div'>
            <label className='label'>What did you like in the course?</label>
              <div className='form-group'>
              {checkboxes1.map(checkbox => (
                  <FormControlLabel
                key={checkbox.id}
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='What_did_you_like_in_the_course'
                    onChange={() => this.handleChange(checkbox.id,checkbox.text)}
                    selected={What_did_you_like_in_the_course.includes(checkbox.id,checkbox.text)}
                  />
                }
                label={checkbox.text}
                />
              ))}
            </div>
            <hr />
          </div>

          <div className='form-div'>
            <label className='label'>
              What did you like about the instructor?
            </label>
            <div className='form-group'>
              {checkboxes2.map(checkbox2 => (
                  <FormControlLabel
                key={checkbox2.id}
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='What_did_you_like_about_the_instructor'
                    onChange={() => this.handleChange(checkbox2.id,checkbox2.text)}
                    selected={What_did_you_like_about_the_instructor.includes(checkbox2.id,checkbox2.text)}
                  />
                }
                label={checkbox2.text}
                />
              ))}
            </div>
          </div>
          <hr />

          <div className='form-div'>
            <label className='label'>How could the course be improved?</label>
            <p className='instructor-para'>
              Our instructors are on hearing from the students like you to make
              their training better.
            </p>
             <div className='form-group'>
              {checkboxes3.map(checkbox3 => (
                  <FormControlLabel
                key={checkbox3.id}
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='How_could_the_course_be_improved'
                    onChange={() => this.handleChange(checkbox3.id,checkbox3.text)}
                    // value={}
                    selected={How_could_the_course_be_improved.includes(checkbox3.id,checkbox3.text)}
                  />
                }
                label={checkbox3.text}
                />
              ))}
            </div>
          </div>
          <div className='form-group'>
            <Button type="submit" variant='contained' color='secondary'>
              Save and Continue
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
 }
};

const mapDispatchToProps = (dispatch) => {
  return {
    Feedback: (data) => {
      dispatch(Feedback(data));
    },
  };
};
export default connect(null,mapDispatchToProps) (FeedbackForm);
