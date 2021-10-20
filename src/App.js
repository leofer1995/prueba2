import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './components/details/Details';
import Search from './components/search/Search';
import Users from './components/users/Users.jsx';



function App() {
  return (
    <Router>
      <Route exact path = '/'>    
        <> 
          <Search />
          <Users />
        </>
      </Route> 

      <Route  path = '/user/:user'  
        render = {({match}) => <Details user={match.params.user}/>}
      /> 
    </Router>
  );
}

export default App;
