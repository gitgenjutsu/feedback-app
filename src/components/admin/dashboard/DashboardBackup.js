// import MaterialTable from 'material-table';
// import React from 'react';
// import AdminNavbar from '../../layout/AdminNavbar';
// const Dashboard = () => {
//   const tableCol = [
//     {
//       title: "Student ID",
//       field: "id"
//     },
//     {
//       title: "Name",
//       field: "name"
//     },
//     {
//       title: "Course",
//       field: "course"
//     },
//     {
//       title: "Email",
//       field: "email"
//     },
//     {
//       title: "Phone",
//       field: "phone"
//     },
//     {
//       title: "Submitted at",
//       field: "createdAt"
//     }
//   ];
//   const tableData = [
//     {
//       id:"AD/WD/EF/45-12/35",
//       name: "Wasim",
//       course: "Web Master",
//       email: "wasim@gmail.com",
//       phone: 9716689303,
//       submit: "01/12/2021",
//           feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples, More Exercises, More real-world Examples, More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     },
//     {
//       id:"SH/WD/DC/15-42/05",
//       name: "Sahil",
//       course: "Web Master ",
//       email: "sahil@gmail.com",
//       phone: 9147235840,
//       submit: "02/02/2021",
//        feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     }
//   ];

//     return (
//         <>
//             <AdminNavbar />
//             <div className="table-div">
//                 <MaterialTable
//           title={"Student's Feedback"}
//           data={tableData}
//           columns={tableCol}
          
//           options={{
//             headerStyle: {
//               backgroundColor: "#01579b",
//               color: "#FFF"
//             },
//             exportButton: true,
//             selection: false,
//             search: true
//           }}
//           detailPanel={[
//             {
//               tooltip: "Show Feedback",
//               render: (rowData) => {
//                 return (
//                   <>
//                     <div className="data-div">
//                         <div className="feedback-data">
//                              <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                                           }}
//                       >
//                         <h5>How could the course be improved?</h5>
//                     {rowData.feedback.How_could_the_course_be_improved}
                    
//                   </div>
//                      <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                                           }}
//                       >
//                         <h5>What did you like about the instructor?</h5>
//                     {rowData.feedback.What_did_you_like_about_the_instructor}
                    
//                   </div>
//                      <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>What did you like in the course?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                   </div>
//                       </div>

//                       <div className="more-details">
//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Are you learning valuable information?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>
//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Are the explanation of concepts clear?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>
//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Is the instructor's delivery engaging?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>

//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Are there enough opportunities to apply what you are learning?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>

//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Is this course delivering on your expectations?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>

//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                       paddingBottom: 10,
//                       backgroundColor: "white"
//                     }}
//                       >
//                         <h5>Is the instructor knowledgeable about the topics?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                         </div>
                        
//                       </div>
//                     </div>
//                   </>
//                 );
//               }
//             }
//           ]}
//         />
//             </div>

//         </>
//     );
// }

// export default Dashboard;



// // Admin Navbar
// import React from 'react';
// import { AppBar, Badge, Grid, IconButton,  Toolbar } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
// import { NotificationsNoneOutlined, PowerSettingsNew } from '@material-ui/icons'
// // import SearchIcon from '@material-ui/icons/Search';

// const AdminNavbar = () => {
//    const menuToggle = (e) => {
//         e.preventDefault();
//        console.log("working");
//        const sidemenu = document.querySelector(".side-menu");
//        const filter = document.querySelector(".filter-box");
//        const dashboard = document.querySelector(".table-div");
//        filter.classList.toggle("active");
//        sidemenu.classList.toggle("active");
//        dashboard.classList.toggle("active");
//     }
//     return (
//         <div className="header">
//             <AppBar position="static" />
//             <Toolbar className="nav-head">
//                 <Grid container alignItems="center">
//                     <Grid item  >
//                         {/* <InputBase placeholder="Search..." className="input-box" startAdornment={<SearchIcon fontSize="small"/>}/> */}
//                         <IconButton onClick={menuToggle}>
//                             <MenuIcon />
//                         </IconButton>
//                     </Grid>
//                     <Grid item sm></Grid>
//                     <Grid item >
//                         <IconButton>
//                             <Badge badgeContent={4} color="secondary">
//                                 <NotificationsNoneOutlined />
//                             </Badge>
//                         </IconButton>
//                          <IconButton>
//                             <PowerSettingsNew />
//                         </IconButton>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </div>
//     );
// }

// export default AdminNavbar;




// import MaterialTable from 'material-table';
// import React from 'react';
// import AdminNavbar from '../../layout/AdminNavbar';
// const Dashboard = () => {
//     const tableCol = [
//     {
//       title: "Name",
//       field: "name"
//     },
//     {
//       title: "Course",
//       field: "course"
//     },
//     {
//       title: "Email",
//       field: "email"
//     },
//     {
//       title: "Phone",
//       field: "phone"
//     },
//     {
//       title: "Submitted at",
//       field: "submit"
//     }
//   ];
//   const tableData = [
//     {
//       name: "Wasim",
//       course: "Web Master",
//       email: "wasim@gmail.com",
//       phone: 9716689303,
//       submit: "01/12/2021",
//           feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     },
//     {
//       name: "Sahil",
//       course: "Web Master ",
//       email: "sahil@gmail.com",
//       phone: 9147235840,
//       submit: "02/02/2021",
//        feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     },
//     {
//       name: "Ritik",
//       course: "Web Master ",
//       email: "ritik@gmail.com",
//       phone: 9716689453,
//       submit: "02/12/2021",
//        feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     },
//       {
//           name: "Shweta",
//           course: "Web Premium",
//           email: "shweta@live.com",
//           phone: 9471358695,
//           submit: "03/12/2021",
//           feedback: {
//               How_could_the_course_be_improved: "More Exercises, More real-world Examples",
//               What_did_you_like_about_the_instructor: " Diret-to-the-point",
//               What_did_you_like_in_the_course: "In-depth Explanation"
//           }
//       },
//     {
//       name: "Rachna",
//       course: "Graphic Master",
//       email: "rachna@gmail.com",
//       phone: 9547183456,
//       submit: "04/12/2021",
//        feedback: {
//               How_could_the_course_be_improved: "More real-world Examples",
//               What_did_you_like_about_the_instructor: "Responsive, Diret-to-the-point",                
//               What_did_you_like_in_the_course: "In-depth Explanation"
//       }
//     }
//   ];

//     return (
//         <>
//             <AdminNavbar />
//             <div className="table-div">
//                 <MaterialTable
//           title={"Student's Feedback"}
//           data={tableData}
//           columns={tableCol}
          
//           options={{
//             headerStyle: {
//               backgroundColor: "#01579b",
//               color: "#FFF"
//             },
//             exportButton: true,
//             selection: false,
//             search: true
//           }}
//           detailPanel={[
//             {
//               tooltip: "Show Feedback",
//               render: (rowData) => {
//                 return (
//                   <div
//                     style={{
//                       fontSize: 20,
//                       textAlign: "center",
//                       color: "black",
//                       backgroundColor: "#eaeef3"
//                     }}
//                   >
//                     {rowData.feedback.How_could_the_course_be_improved}
//                     {rowData.feedback.What_did_you_like_about_the_instructor}
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                   </div>
//                 );
//               }
//             }
//           ]}
//         />
//             </div>

//         </>
//     );
// }

// export default Dashboard;




// detailPanel={[
//             {
//               tooltip: "Show Feedback",
//               render: (rowData) => {
//                 return (
//                   <>
//                     <div className="data-div">
//                         <div className="feedback-data">
//                              <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                                           }}
//                       >
//                         <h5>How could the course be improved?</h5>
//                     {rowData.feedback.How_could_the_course_be_improved}
                    
//                   </div>
//                      <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
//                                           }}
//                       >
//                         <h5>What did you like about the instructor?</h5>
//                     {rowData.feedback.What_did_you_like_about_the_instructor}
                    
//                   </div>
//                      <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
                      
//                     }}
//                       >
//                         <h5>What did you like in the course?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                   </div>
//                       </div>
//                       <div>
//                         <div
//                     style={{
//                       fontSize: 18,
//                       textAlign: "center",
//                       color: "black",
                      
//                     }}
//                       >
//                         <h5>What did you like in the course?</h5>
//                     {rowData.feedback.What_did_you_like_in_the_course}
                    
//                   </div>
//                       </div>
//                     </div>
//                   </>
//                 );
//               }
//             }
//           ]}

// 0XJ6ufxFRJdG5TJbSZcr 
//      const ref = firebase
//       .firestore()
//       .collection("students");
//     const snapshot = await ref.get();
//     snapshot.forEach(doc => {
//       console.log(doc.id, '=>', doc.data());
//       settableData(doc.data());
//     });


 // .doc();
    // ref.get().then((doc) => {
    //   console.log(doc);
    //   const feedbackdata = doc.data();
    //   if (doc.exists) {
    //     settableData({
    //       id: feedbackdata.id,
    //       name: feedbackdata.name,
    //       course: feedbackdata.course,
    //       email: feedbackdata.email,
    //       phone: feedbackdata.phone,
    //       createdAt: feedbackdata.createdAt
    //     });
    //   } else {
    //     console.log("No doc found!");
    //   }
    // });