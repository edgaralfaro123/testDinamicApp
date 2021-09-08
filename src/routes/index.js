import { BrowserRouter as Router, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from '../views/Login';
import Poll from "../views/Poll";
import Register from "../views/Register";
import DetailPoll from "../views/DetailPoll";
import PollRealized from "../views/PollRealized";
import DetailPollRealized from "../views/DetailPollRealized";
  const Routes =()=>{
    const userToken = useSelector(state => state?.loginReducer?.token)
    return (
      !userToken ?
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Router>
      :
        <Router>
            <Route exact path="/" component={Poll} />
            <Route exact path="/Poll" component={Poll} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/detailpoll" component={DetailPoll} />
            <Route exact path="/pollrealized" component={PollRealized} />
            <Route exact path="/detailpollrealized" component={DetailPollRealized} />

        </Router>
    );
  }
  export default Routes;