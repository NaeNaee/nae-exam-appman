import React, { Component } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

class App extends Component {
  state = {
    fetching: false,
    error: ''
  }

  handleSubmit = (data) => {
    this.setState({ fetching: true, error: '' });

    axios.post('http://localhost:3000/api/login', data, {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        this.setState({ fetching: false });
        alert('Login Successed');
        console.log(response);
      })
      .catch(error => {
        this.setState({ fetching: false, error: 'E-mail or password is incorrect' });
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <LoginForm fetching={this.state.fetching}
          error={this.state.error}
          onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
