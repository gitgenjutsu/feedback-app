import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import AdminNavbar from '../../layout/AdminNavbar';
import firebase from '../../../config/fbConfig';

const Dashboard = () => {
  const [tableData, settableData] = useState();
  useEffect(() => {
    getdata();
  });

  async function getdata() {
     const refA = firebase.firestore().collection("students");
     const refB = firebase.firestore().collection("feedback");
     const refC = firebase.firestore().collection("details");
    // fetch data in parallel
    Promise.all([refA.get(), refB.get(), refC.get()])
    
    // merge the results
  .then(promiseResults => {
     const mergedData = [];
     promiseResults.forEach( snapshot => {
        snapshot.forEach( doc => mergedData.push(doc.data()) );
     });
     console.log(mergedData)
     return mergedData;
  })
     // sort the results
  .then(mergedData => mergedData.sort((a, b) => a.timestamp - b.timestamp))

  // use the results
  .then(sortedData => {
    settableData(sortedData);
    //  console.log(sortedData);
  })

  // log any errors
  .catch(e => console.error(e));
    
  }

  const tableCol = [
    {
      title: "Student Id",
      field: "id"
    },
    {
      title: "Name",
      field: "name"
    },
    {
      title: "Course",
      field: "course"
    },
    {
      title: "Email",
      field: "email"
    },
    {
      title: "Phone",
      field: "phone"
    }
    
  ];
  
      return (
        <>
            <AdminNavbar />
            <div className="table-div">
                <MaterialTable
          title={"Student's Feedback"}
          data={tableData}
          columns={tableCol}
          
          options={{
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            },
            exportButton: true,
            selection: false,
            search: true
          }}
          detailPanel={[
            {
              tooltip: "Show Feedback",
              render: (rowData) => {
                return (
                  <>
                    <div className="data-div">
                        <div className="feedback-data">
                             <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                                          }}
                      >
                        <h5>How could the course be improved?</h5>
                    {rowData.How_could_the_course_be_improved}
                    
                  </div>
                     <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                                          }}
                      >
                        <h5>What did you like about the instructor?</h5>
                    {rowData.What_did_you_like_about_the_instructor}
                    
                  </div>
                     <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>What did you like in the course?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                  </div>
                      </div>

                      <div className="more-details">
                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Are you learning valuable information?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>
                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Are the explanation of concepts clear?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>
                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Is the instructor's delivery engaging?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>

                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Are there enough opportunities to apply what you are learning?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>

                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Is this course delivering on your expectations?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>

                        <div
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "black",
                      paddingBottom: 10,
                      backgroundColor: "white"
                    }}
                      >
                        <h5>Is the instructor knowledgeable about the topics?</h5>
                    {rowData.What_did_you_like_in_the_course}
                    
                        </div>
                        
                      </div>
                    </div>
                  </>
                );
              }
            }
          ]}
        />
            </div>

        </>
    );
}

export default Dashboard;