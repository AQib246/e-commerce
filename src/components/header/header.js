import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from  "../../assets/crown.svg";
import './header.styles.scss'
import {connect} from 'react-redux'
import './header.styles.scss';
import { auth } from '../../Firebase/firebaseConfig';
import  CartIcon  from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropDown';
import { selectCurrentUser } from '../../Redux/Reducers/user/userSelector';
import Header2 from './header2';

const Header = ({currentUser,isHidden,signInToggler}) => (
//   <div className='header'>
// {/* console.log("header"+isHidden)*/}

//     <Link className='logo-container' to='/'>
//       <Logo className='logo' />
//     </Link>
//     <div className='options'>
//       <Link className='option' to='/shop'>
//         SHOP
//       </Link>
//       <Link className='option' to='/shop'>
//         CONTACT
//       </Link>
//           {currentUser ?
//                 <div onClick={()=>auth.signOut()} className="option">SIGN OUT</div>
//                 :
//                 <Link to='/signin'   className="option" onClick={signInToggler}>SIGN IN</Link>
//             } 
        

//     </div>
//     <CartIcon/>
//       {isHidden?null:<CartDropdown/>}
//   </div>
<Header2/>

);


const mapStateToProps =(state)=>({
  currentUser:selectCurrentUser(state),
  isHidden:state.cart.isHidden,
  
})
export default connect(mapStateToProps)(Header);