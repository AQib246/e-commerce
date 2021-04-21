import React, { Component } from 'react'
import './directory.styles.scss';
import  MenuItem  from '../menu-Item/menuItem';
import { selectDirectorySections } from '../../Redux/Reducers/directory/directorySelector';
import {connect} from 'react-redux'
 
 
const Directory =({sections})=>{    
        return (

     <div className="directory-menu">
        {sections.map(({title,imageUrl,id,size,linkUrl})=>(
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
        ))}
      </div>
    )
 
        }

const mapStateToProps =(state)=>({
sections:selectDirectorySections(state)
})

export default  connect(mapStateToProps)(Directory);