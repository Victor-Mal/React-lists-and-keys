import React from 'react';
import PhoneList from './components/PhoneList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.lang);
  }

  render() {
        return (
      <div>
        <PhoneList />
      </div>
    );
  }
}


export default App;
