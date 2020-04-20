import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchUsers();
  }

  add = (event) => {
    event.preventDefault();
		fetch('http://plato.mrl.ai:8080/contacts/add', {
			method: 'POST',
			body: JSON.stringify({ 
        name: this.refs.firstName.value + ' ' + this.refs.lastName.value,
			  number: this.refs.phoneNum.value }),
			headers: { "Content-type": "application/json", API: "mcadams" }
    })
    .then(res => { return res.json() })
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
			});
  }
  
  delete = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({ position: index }),
      headers: { "Content-type": "application/json", API: "mcadams" }
    })
    .then(res => {  return res.json() }) 
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
    });
  }
  
  fetchProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", { 
      headers: { API: "mcadams" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ profile: data });
      console.log(data)
    });
  }

  fetchUsers() {
    window.fetch("http://plato.mrl.ai:8080/contacts", { 
      headers: { API: "mcadams" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts });
      console.log(data)
    });
  }

  render() {
  return (

    <div>
      <h2 className="header mt-3">Contacts App</h2>
      <form onSubmit={this.add}>
      <hr class="new1"></hr>

      <div>
        <h3 className="header2 ml-2" 
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}
          >Your Profile:</h3>

        <p className="profile ml-2" 
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}><strong>Name: </strong> {this.state.profile.name} </p>

          <p className="profile ml-2" 
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
        <strong>Entries Made: </strong> {this.state.profile.count}</p>
      </div>

        <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}} >
        <fieldset>
          <legend className="legend ml-3"
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
          <strong>New Contact</strong></legend>
          <input ref="firstName" type='text' placeholder='First' className="inputBox ml-2"/>
          <input ref="lastName" type='text' placeholder='Name' className="inputBox"/>
          <input ref="phoneNum" type='text' placeholder='Phone Number' className="inputBox ml-2"/>
          < br/>
          < br/>
          <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}} ><button type="submit" className="addButton ml-2 col-3">Add</button> </div>
        </fieldset>
        </div>
      </form>
      <hr class="new1"></hr>

      <div>
        <h3 className="header2 ml-2" style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>Contacts List:</h3>
       {
         this.state.contacts.map((value, index) => {
           return <p className="contacts ml-2" key={index}><strong>{index + 1}</strong>. <strong><u>Name:</u></strong> {value.name}<br />
           &nbsp;&nbsp;&nbsp;<strong><u>Number:</u></strong> {value.number}<button type="submit" 
           onClick={() => this.delete(index)} className="delButton col-3 offset-1 ml-5" id={index}>Delete</button></p>;
         })
       }
      </div>
    </div>
    );
  }
}

export default App;