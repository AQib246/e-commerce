import React, { Component } from 'react';
import { ReactComponent as Logo } from  "../../assets/crown.svg";
import {Link} from 'react-router-dom';
import { auth } from '../../Firebase/firebaseConfig';
import {connect} from 'react-redux'
import { selectCurrentUser } from '../../Redux/Reducers/user/userSelector';
import  CartIcon  from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropDown';

const Header2 = ({isHidden,currentUser})=> {
  return (
    <>
     <header className="header-section">
        <div className="container-fluid">
            <div className="inner-header">
                <div className="logo">
                    {/* <a href="./index.html"><img src="img/logo.png" alt=""/></a> */}
                <Logo/>
                </div>
                <div className="header-right">
         <CartIcon/>
              {isHidden?null:<CartDropdown/>}
                </div>
                <div className="user-access">
                {currentUser ?
                     <div onClick={()=>auth.signOut()} className="option">SIGN OUT</div>
                     :
                     <Link to='/signin'   className="option">SIGN IN</Link>
                 } 
                </div>
                <nav className="main-menu mobile-menu">
                    <ul>
                        <li><Link className='active' to='/'>Home</Link></li>
                        <li><span style={{cursor:'pointer'}}>Shop</span>
                            <ul className="sub-menu">
                                <li><a href="product-page.html">Sale upto 40%</a></li>
                                <li><a href="shopping-cart.html">Shoes</a></li>
                                <li><a href="check-out.html">Glasses</a></li>
                            </ul>
                        </li>
                        <li><Link to='/shop/mens' >Mens</Link></li>
                        <li><Link to='/shop/womens'>Womens</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div className="header-info">
       
            <div className="row header-info-container">
                    <div className="header-item">
                        <img src="/icons/delivery.png" alt=""/>
                        <p>Free shipping on orders over Rs:2000</p>
                    </div>
                    <div className="header-item">
                        <img src='/icons/sales.png' alt=""/>
                        <p>20% off on the order of above Rs:5000</p>
                    </div>
                    <div className="header-item">
                    <img src='/icons/voucher.png' alt=""/>
                    <p>Free shipping in the selected areas</p>
                </div>
            </div>
    </div>

    </>
  );
}


const mapStateToProps =(state)=>({
    currentUser:selectCurrentUser(state),
    isHidden:state.cart.isHidden,
    
  })

  export default connect(mapStateToProps)(Header2);