import React, { Component } from 'react'
import FormInput from '../form-Input/formInput'
import "./signIn.styles.scss"
import CustomButton from '../custom-button/customButton'
import { signInWithGoogle, auth } from '../../Firebase/firebaseConfig'
// import { signInWithGoogle } from '../../Firebase/firebase'

export default class SignIn extends Component {
  constructor(props){
      super(props)
      this.state={
          email:"",
          password:"",
    
        }
  }
  
  handleChange =(e)=>{
   this.setState({
     [e.target.name]:e.target.value
   })
  }
  handleSubmit =async (e)=>{
  e.preventDefault();

  try{
    await auth.signInWithEmailAndPassword(this.state.email,this.state.password)
  this.setState({
    email:"",
    password:"",

  })
  
  }
  catch(error){
  console.log(error)
  }

  }

    render() {
      console.log(this.props)

    return (
      <div className="sign-in">
        <h1 className="title">I Have Already An Account</h1>
        <span>Sign in with your email and password</span>
     <form onSubmit={this.handleSubmit}>
        <FormInput
        name="email"
        type="email"
        required 
        value={this.state.email}
        label="email"
        handleChange={this.handleChange}

        
        />

        <FormInput
        name="password"
        type="password"
        value={this.state.password}
        label="password"
        required
        handleChange={this.handleChange}
        />
        <div className="buttons">
        <CustomButton type="submit">Sign IN</CustomButton>
       
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
       
        </div>

        </form>

      </div>
    )
  }
}
