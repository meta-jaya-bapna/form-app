import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withRouter } from 'react-router';
import FormPage from './FormPage.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const handleSubmit = (data) => console.log(data);

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You are submitting ");
    this.props.history.push(FormPage);
  }

  setFormData = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello {this.state.name}</h1>
        <label for="name"> Name: </label> <br/>
        <input type="text" id="name" name="name" onChange={this.setFormData}/><br/>
        <label for="age">Age:</label><br/>
        <input type="text" id="age" name="age" onChange={this.setFormData}/><br/>
        <label for="email">Enter your email:</label><br/>
        <input type="email" id="email" name="email" onChange={this.setFormData}/><br/>
        <label for="phone">Phone:</label><br/>
        <input type="text" id="phone" name="phone" onChange={this.setFormData}/><br/>
        <input type="radio" id="male" name="gender" value="male" onChange={this.setFormData}/>
        <label for="male">Male</label><br/>
        <input type="radio" id="female" name="gender" value="female" onChange={this.setFormData}/>
        <label for="female">Female</label><br/>
        <input type="radio" id="other" name="gender" value="other" onChange={this.setFormData}/>
        <label for="other">Other</label><br/>
        <label for="address">Address:</label><br/>
        <textarea id="address" name="address" rows="4" cols="50" onChange={this.setFormData}></textarea><br/>
        <input id="imageUpload" type="file" 
        name="profile_photo" placeholder="Photo" required="" capture onChange={this.setFormData}></input>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    );
  }
}

ReactDOM.render(<ProfileForm />, document.getElementById('root'));

export default withRouter(ProfileForm)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
