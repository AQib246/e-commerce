import React from 'react';
import "./App.css"
import Home from './pages/home-Page/home';
import {Switch,Route,Redirect} from "react-router-dom"
import ShopPage from './pages/shop-page/shopPage';
import Header from './components/header/header';
import SingInSignUp from './pages/signIn-SignUp-Page/signInSignUp';
import { auth, createUserProfile,addCollectionAndDocument } from './Firebase/firebaseConfig';
import {connect} from 'react-redux'
import { setCurrentUser } from './Redux/Actions/userAction';
import  Checkout  from './pages/checkOut/checkOutPage';
import { selectShopDataToArry } from './Redux/Reducers/shop/shopSelector';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser, selectLogin } from './Redux/Reducers/user/userSelector';
import FooterSection from './components/footer/footerSection';

 class App extends React.Component {
  
  unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser,collectionArray} =this.props;
  this.unsubscribeFromAuth=auth.onAuthStateChanged((userAuth)=>{
   console.log("did mount",collectionArray)
   
  //  addCollectionAndDocument("collections",collectionArray.map(({title,items})=>({title,items})))
   
   if(userAuth){

   const userRef = createUserProfile(userAuth);
    userRef.then(db=>{
      db.onSnapshot(snap=>{
        console.log("app.js",snap)
          setCurrentUser({
          currentUser:{
            id:snap.id,
            ...snap.data()
          }
        })
      })
    })

}
      else{
      setCurrentUser(userAuth);
        
      }
});
  
}




componentWillUnmount(){
this.unsubscribeFromAuth();
}

  render() {
    console.log("select login",this.props.selectLogin)
    return (
      <div>
        <Header />
<Switch>
 <Route exact path='/' component ={Home} />
  <Route path='/shop'  component={ShopPage}/> 
  <Route  path= '/signin'  render={(props)=>this.props.currentUser ?<Redirect to="/"/>:<SingInSignUp {...props}/> }/>
  <Route path='/checkout' component={Checkout}/>
</Switch>
<FooterSection/>

      </div>
    )
  }
}

// const mapStateToProps =({user})=>({
// currentUser:user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionArray:selectShopDataToArry,
  selectLogin:selectLogin
})
const mapDispatchToProps =(dispatch)=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App)



