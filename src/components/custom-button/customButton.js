import React from 'react'
import "./custom-button.styles.scss"

const CustomButton =({children,isGoogleSignIn,inverted,...otherProps})=>(
    <button {...otherProps} className={`${inverted ? "inverted":""} ${isGoogleSignIn? "google-signin":""} custom-button`}>
       {children}
    </button>
)
export default CustomButton;