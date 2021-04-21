import {createSelector} from "reselect"

// const collection_id_map ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop =(state)=>state.shop;

export const selectShopData =createSelector(
    [selectShop],
    (shop)=>shop.shopData
)

export const selectShopDataToArry = createSelector(
    [selectShopData],
    (collections)=>collections ? Object.keys(collections).map(key=>collections[key]):[]
)


export const selectShopCollection = collectionUrlParam =>
    createSelector(
        [selectShopData],
        collections=>collections ? (collections[collectionUrlParam]):(null)

    )

export const selectShopPageLoading= createSelector(
    [selectShop],
    (shop)=>shop.isLoading
)

export const selectCollectionPageLoading =createSelector(
    [selectShopData],
    (shopData)=>!!shopData

)
