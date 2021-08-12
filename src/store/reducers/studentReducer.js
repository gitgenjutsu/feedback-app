const initState = {
  student: {}
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_STUDENT":
      console.log("Student Created", action.student);
      state.student = action.student;
      return state;

    case "CREATE_STUDENT_ERROR":
      console.log("Error in Creating Student", action.err);
      return state;

    case "CREATE_DETAILS":
      console.log("Student Details Created", action.detail);
      return state;

    case "CREATE_DETAILS_ERROR":
      console.log("Error in Creating Student Details", action.err);
      return state;

    case "CREATE_FEEDBACK":
      console.log("Feedback Submitted", action.data);
      return state;

    case "CREATE_FEEDBACK_ERROR":
      console.log("Error in Feedback Submitted", action.err);
      return state;

    default:
      return state;
  }
};
export default studentReducer;
