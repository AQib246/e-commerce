import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import collectionPage from '../collection/collectionPage'
import {connect} from 'react-redux';
import {  fetchingCollectionAsync } from '../../Redux/Actions/shopAction';
import { Spinner } from '../../components/HOC-components/with-spinner/spinner';
import collectionOverView from '../../components/collection-overview/collectionOverView';
import {createStructuredSelector} from 'reselect'
import {  selectCollectionPageLoading, selectShopPageLoading } from '../../Redux/Reducers/shop/shopSelector';

const CollectionOverViewWithSpinner = Spinner(collectionOverView);
const CollectionPageWithSpinner = Spinner(collectionPage);


class ShopPage extends React.Component{
   

   // unsubscribeFromSnapShot=null;
  
   componentDidMount(){
 this.props.fetchingCollectionAsync();
   
}


   render(){
      const {isLoadingShopPage,match,isLoadingCollectionPage} =this.props;

      return (
         <div className="shop-page">
      <Route exact path={`${match.path}`}  render={(props)=><CollectionOverViewWithSpinner isLoading={isLoadingShopPage} {...props}/>} />
      <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isLoadingCollectionPage} {...props}/>} />
         </div>
       )
   }
}

const mapStateToProps = createStructuredSelector({
isLoadingShopPage:selectShopPageLoading,
isLoadingCollectionPage:selectCollectionPageLoading
})

const mapDispatchToProps =(dispatch)=>({
fetchingCollectionAsync:()=>dispatch(fetchingCollectionAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)
