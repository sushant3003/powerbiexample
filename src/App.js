import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { Route, Switch } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Main from './Components/MainComponent/Main';
import Power from './Components/Power/Power';
// import Navbar from './Navbar';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {};
  }

  render() {
  return (
    <Provider store={store}>
      {/* <Navbar/> */}
      <div className="App"  style={{ overflow: 'hidden'}}>
        <Switch>
          <Route path="/home" component={Welcome} />
          <Route path="/main" component={Main} />
          <Route path="/power" component={Power} />
        </Switch>
      </div>
    </Provider>
  );
}
}
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapDispatchToProps)(App);