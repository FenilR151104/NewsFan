import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React, { useState } from 'react'
import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
const App = () => {
  const pageSize = 8;
  // pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  // apiKey = process.env.REACT_APP_NEWS_API_KEY
  // "3a02625f4dab4c5498f486635498cdbe";

  // state = {
  //   progress: 0
  // }
  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   this.setState({progress: progress});
  // }

  // render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height ={3}
        color="#f11946"
        progress={progress}
        />
       
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />  
          {/* exact is used to change the exaxct path and key is used to remount  */}
          {/* for example by the use of exact the path changes only in url but not in website but with the use of key as we click on any other category, path will be changed and news of that catrgory will show there  */}
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology"  pageSize={pageSize} country="us" category="technology" />} />   
        </Routes>
        </Router>
      </div>
    )
  // }
}
// }

export default App;