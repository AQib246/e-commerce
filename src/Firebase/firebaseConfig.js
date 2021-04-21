import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJWoouhStUsuIJchGTvUcWkeYfT7dI4xk",
    authDomain: "e-commerce-6b0d4.firebaseapp.com",
    databaseURL: "https://e-commerce-6b0d4.firebaseio.com",
    projectId: "e-commerce-6b0d4",
    storageBucket: "",
    messagingSenderId: "324644871084",
    appId: "1:324644871084:web:2124623cdbe1daf73df809",
    measurementId: "G-TSX8GHNP9X"
  };
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


export const createUserProfile = async (userAuth,additionalData)=>{
if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
   const snap =  await userRef.get();
   console.log("snap",snap)
   console.log("userRef",userRef)

   if(!snap.exists){
    
     const {displayName,email} =userAuth;
     const createdAt = new Date();

  try{
 
    await  userRef.set({createdAt,displayName,email})
  
}
  catch(error) {
console.log(error.message)

  }
}
return userRef;
}

  export const firestore= firebase.firestore();


  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle =()=>auth.signInWithPopup(provider);









  export const addCollectionAndDocument =async (collectionKey,collectionData)=>{

  const collectionRef = firestore.collection(collectionKey);
   

  const batch = firestore.batch();

  collectionData.forEach(obj=>{
    const docRef = collectionRef.doc();

    batch.set(docRef,obj)
  })

    return await batch.commit();
}
  


export const convertCollectionSnapshotToMap =(snapshot)=>{
  console.log(snapshot)
const tranformedData = snapshot.docs.map(doc=>{
    const {title,items} = doc.data();

    return{
      routeName:encodeURI(title),
      id:doc.id,
      title,
      items
    }
})

console.log("transformed",tranformedData)

return tranformedData.reduce((accumulator,collection)=>{
accumulator[collection.title.toLowerCase()]=collection;
return accumulator;
},{})

}
