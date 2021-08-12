import React from "react";
import { Container, Form } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import Navbar from "../layout/Navbar";

const FeedbackForm = () => {
  return (
    <div className='feedback-div'>
    <Navbar/>
      <h4 className='heading center'>
        Great! Glad You are Participating in Feedback Drive!
      </h4>
      <Container className='form-container'>
        <Form>
          <div className='form-div'>
            <label className='label'>What did you like in the course?</label>
            <div className='form-group'>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='In-depth Explanation'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Applicable to the Real World'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Comprehensive Curriculum'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Short & Sweet'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Slow & Steady Pace'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Swift Pace'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Enlightening'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Nothing'
              />
            </div>
            <hr />
          </div>

          <div className='form-div'>
            <label className='label'>
              What did you like about the instructor?
            </label>
            <div className='form-group'>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Direct & to-the-point'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Experienced'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Friendly'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Responsive'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Fun Loving'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Engaging'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Nothing'
              />
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
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Accent (way of his/her speaking) is hard to understand'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='More Detail'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='More Exercises'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='More Energy'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Slow Down Pace'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='Speed Up Pace'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label='More Real-World Applications'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name='checkedH'
                  />
                }
                label="Simply, I Don't have any issues"
              />
            </div>
          </div>
          <div className='form-group'>
            <Button variant='contained' color='secondary'>
              Save and Continue
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default FeedbackForm;
