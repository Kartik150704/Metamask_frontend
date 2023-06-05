import firebase from 'firebase/app';
import 
{
  getFirestore ,collection, CollectionReference
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC7lut4w-9PeYmAAcGFOFCh_ssegAmQDY0",
  authDomain: "metamask-f7269.firebaseapp.com",
  databaseURL: "https://metamask-f7269-default-rtdb.firebaseio.com",
  projectId: "metamask-f7269",
  storageBucket: "metamask-f7269.appspot.com",
  messagingSenderId: "338227671316",
  appId: "1:338227671316:web:26aad2a1b39a7a493a1201",
  measurementId: "G-DQ6BFY96F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore()

const colRef=collection(db,'users')

getDocs(colRef)
.then((snapshot)=>
{
    let users=[];
    snapshot.docs.array.forEach((doc) => {
      users.push({...doc.data(),id:doc.id})
      
    });
    console.log(users)
})
