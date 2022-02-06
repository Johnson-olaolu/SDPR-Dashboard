import { useState } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Homepage from './screens/Homepage';
import MultiplePredictionScreen from './screens/MultiplePredictionScreen';
import Service1Dashboard from './screens/Service1Dashboard';
import SingleRecommendation from './screens/SingleRecommendation';
import { CompeteStudentData } from './store';

function App() {
  const [completeStudent, setCompleteStudent] = useState([]);
  return (
    <div className="App">
      <CompeteStudentData.Provider value={{completeStudent, setCompleteStudent}}>
        <Router>
          <Route path="/" exact component={Homepage}/>
          <Route path="/dashboard/service1" component={Service1Dashboard}/>
          <Route path = "/dashbord/multi-prediction" component={MultiplePredictionScreen}/>
          <Route path= "/dashboard/recommendation/:id" component={SingleRecommendation}/>
        </Router>
      </CompeteStudentData.Provider>
        
    </div>
  );
}

export default App;
