import React from 'react';
import "./spinner.styles.scss"

export const Spinner = (WrappedComponent)=>({isLoading,...otherProps})=>{
    return isLoading ? 
    <div className="spinnerOverlay">
        <div className="spinnerContainer">

        </div>
    </div>:<WrappedComponent {...otherProps}/>
}