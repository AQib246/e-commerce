import React from 'react'
import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import { selectShopData, selectShopDataToArry } from '../../Redux/Reducers/shop/shopSelector'
import CollectionPreview from '../collection-preview/collectionPreview'

const CollectionOverView =({collections})=>(
<div className="collection-overview">

{collections.map(({id,...otherSection})=>(
 
 <CollectionPreview  key={id} {...otherSection}/>

))}
</div>
)

const mapStateToProps =createStructuredSelector({
    collections:selectShopDataToArry
})

export default connect(mapStateToProps)(CollectionOverView);