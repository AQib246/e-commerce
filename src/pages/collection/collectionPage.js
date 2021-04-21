import React from 'react'
import {connect} from 'react-redux'
import { selectShopCollection, selectShopData } from '../../Redux/Reducers/shop/shopSelector'
import CollectionItem from '../../components/collection-item/collectionItem';
import "./collection.styles.scss";


const CollectionPage =({match,collection})=>{
const {items,title} = collection;
console.log("collection page",collection)
return(
        <div className="collection-page">
           <h2 className="title">{title}</h2>
           <div className="items">
        {items.map((item)=><CollectionItem key={item.id} item={item}/>)}

           </div>

        </div>
    )
}

const mapStateToProps =(state,ownProps)=>({
    collection:selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);