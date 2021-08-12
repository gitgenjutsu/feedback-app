import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Container ,Form} from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Navbar from '../layout/Navbar';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { MoreDetails } from "../../store/actions/studentActions";

const MoreDetailsForm = () => {
    let history = useHistory();
    const [value1, setValue1] = useState("Yes");
    const [value2, setValue2] = useState("Yes");
    const [value3, setValue3] = useState("Yes");
    const [value4, setValue4] = useState("Yes");
    const [value5, setValue5] = useState("Yes");
    const [value6, setValue6] = useState("Yes");

        const handleChange1 = (event) => {
            setValue1(event.target.value);
        };
    
        const handleChange2 = (event) => {
            setValue2(event.target.value);
        };
        
        const handleChange3 = (event) => {
            setValue3(event.target.value);
        };
        
        const handleChange4 = (event) => {
            setValue4(event.target.value);
        };
        
        const handleChange5 = (event) => {
            setValue5(event.target.value);
        };
    
        const handleChange6 = (event) => {
            setValue6(event.target.value);
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(value1, value2, value3, value4, value5, value6);
            MoreDetails(value1, value2, value3, value4, value5, value6);
            history.push("/thankyou");
        }
    return (
        <>
            <Navbar/>
            <div className="moreinfo-div">
                 <Container>
                <div className="moreDetails-div outer_shadow">
                    <Form onSubmit={handleSubmit}>
                        <h4 className="heading center">Please tell us some more.</h4>
                         <div className="questions">
                        <ol>
                            <li>Are you learning valuable information?</li>
                            <RadioGroup  className="radioGrp" name="status1" value={value1} onChange={handleChange1}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Are the explanation of concepts clear?</li>
                           <RadioGroup  className="radioGrp" name="status2" value={value2} onChange={handleChange2}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Is the instructor's delivery engaging?</li>
                            <RadioGroup  className="radioGrp" name="status3" value={value3} onChange={handleChange3}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Are there enough opportunities to apply what you are learning?</li>
                            <RadioGroup  className="radioGrp" name="status4" value={value4} onChange={handleChange4}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>
                            
                            <li>Is this course delivering on your expectations?</li>
                            <RadioGroup  className="radioGrp" name="status5" value={value5} onChange={handleChange5}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                            <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
                            </RadioGroup>

                            <li>Is the instructor knowledgeable about the topics?</li>
                           <RadioGroup  className="radioGrp" name="status6" value={value6} onChange={handleChange6}>
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


const mapStateToProps = (state) => {
    return { auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
    return {
        MoreDetails: (value1,value2,value3,value4,value5, value6) => {
            dispatch(MoreDetails(value1,value2,value3,value4,value5, value6));
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MoreDetailsForm);
