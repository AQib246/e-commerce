import React from 'react'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/sign-up/signUp'
import './signInSignUp.styles.scss'

const SingInSignUp = (props) => {
  return (
    <div className="signin-signup-page">
        {console.log(props.match)}
        <SignIn/>
        <SignUp/>
      
    </div>
  )
}
export default SingInSignUp
