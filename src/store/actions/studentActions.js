//new student data
export const createStudent = (student) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // const firebase = getFirebase();

        // const profile = getState().firebase.profile;
        // const studId = getState().firebase.auth.uid;

        firestore
            .collection("students")
            .add({
                ...student,
                // studName: profile.studName,
                // studId,
                createdAt: new Date(),
            }).then(() => {
                dispatch({ type: "CREATE_STUDENT", student: student });
            }).catch((err) => {
                dispatch({ type: "CREATE_STUDENT_ERROR", err });
            });
    };
};

//Feedback Data
export const Feedback = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // const firebase = getFirebase();


        firestore
            .collection("feedback")
            .add({
                ...data,
                // createdAt: new Date(),
            }).then(() => {
                dispatch({ type: "CREATE_FEEDBACK", detail: data });
            }).catch((err) => {
                dispatch({ type: "CREATE_FEEDBACK_ERROR", err });
            });
    };
};


//More Details Form
export const MoreDetails = (detail) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // const firebase = getFirebase();


        firestore
            .collection("details")
            .add({
                ...detail,
                // createdAt: new Date(),
            }).then(() => {
                dispatch({ type: "CREATE_DETAILS", detail: detail });
            }).catch((err) => {
                dispatch({ type: "CREATE_DETAILS_ERROR", err });
            });
    };
};