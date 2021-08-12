import './sass/main.css';
import FeedbackForm from './components/feedback/FeedbackForm';
import StudentDetails from './components/feedback/StudentDetails';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoreDetailsForm from './components/feedback/MoreDetailsForm';
import ThankYou from './components/feedback/ThankYou';
import Dashboard from './components/admin/dashboard/Dashboard';
// import Forgetpassword from './components/admin/auth/Forgetpassword';
import LogIn from './components/admin/auth/LogIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StudentDetails}/>
        <Route exact path="/feedback" component={FeedbackForm} />
        <Route exact path="/moredetails" component={MoreDetailsForm} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        {/* <Route exact path="/admin/forgetpassword" component={Forgetpassword}/> */}
        <Route exact path="/admin/login" component={LogIn}/>
      </Switch>
   </Router>
  );
}

export default App;
