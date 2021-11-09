import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-JwZRcwfI2C0rjrPQT6KzCLQX_CkKTEs",
  authDomain: "todo-aa4ef.firebaseapp.com",
  databaseURL: "https://todo-aa4ef-default-rtdb.firebaseio.com",
  projectId: "todo-aa4ef",
  storageBucket: "todo-aa4ef.appspot.com",
  messagingSenderId: "867892390001",
  appId: "1:867892390001:web:fe2b562d639279bc2793d0",
});

export const db = getFirestore(firebaseApp);