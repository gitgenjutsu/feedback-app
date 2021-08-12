import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";

const ThankYou = (props) => {
  return (
    <>
      <Navbar />
      <div className="center thankyou-div">
        <h1 className="heading">ThankYou</h1>
        <h3>
          <strong>
            <span className="text-warning">{props.user.name}</span> for your
            valuable feedback
          </strong>
        </h3>
        <p className="feedback-link">
          <Link to="/">Go to Feedback again</Link>
        </p>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { user: state.feedbackdata.student };
};

export default connect(mapStateToProps, null)(ThankYou);
