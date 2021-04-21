import React, { Component } from 'react';
import FormInput from '../form-Input/formInput';
import { auth, createUserProfile } from '../../Firebase/firebaseConfig';
import CustomButton from '../custom-button/customButton';


export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:"",
        
        }

    }

handleSubmit = async (e)=>{
   e.preventDefault();
    const {displayName,email,password,confirmPassword} =this.state;
    
    const {user} = auth.createUserWithEmailAndPassword(email,password)

if(password !== confirmPassword){
alert("password not match");
return;
}

    try{

    await createUserProfile(user,{displayName})
   
    this.setState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:"",
    
    })

}

catch(error){

 console.log(error)
}


}

handleChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value
  })
}

  render() {
      const {displayName,email,password,confirmPassword} =this.state;
    return (
      <div className="sign-up">
          <h2 className="title">I don't have an account</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={this.handleSubmit}>

          <FormInput
          name="displayName"
          type='text'
          value={displayName}
          onChange={this.handleChange}
          label="Name"
          required

          />

          <FormInput
                    name="email"
                    type='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
          
          
          
          />

          <FormInput
                    name="password"
                    type='password'
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    required
          
          
          
          />

          <FormInput
                    name="confirmPassword"
                    type='password'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="confirm password"
                    required
          
          
          />

<CustomButton type="submit">Sign UP</CustomButton>
          </form>
        
      </div>
    )
  }
}
