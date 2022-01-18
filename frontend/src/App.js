import { BrowserRouter as Router , Route} from 'react-router-dom'
import Homepage from './screens/Homepage';
import MultiplePredictionScreen from './screens/MultipleRecommendation';
import Service1Dashboard from './screens/Service1Dashboard';

function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/" exact component={Homepage}/>
          <Route path="/dashboard/service1" component={Service1Dashboard}/>
          <Route path = "/dashbord/multi-prediction" component={MultiplePredictionScreen}/>
        </Router>
    </div>
  );
}

export default App;
