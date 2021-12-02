import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyDrmakig-ZplPtFppzBK5msRGlH-ZvfX2U",
  authDomain: "talismansales-6b818.firebaseapp.com",
  projectId: "talismansales-6b818",
  storageBucket: "talismansales-6b818.appspot.com",
  messagingSenderId: "132036549977",
  appId: "1:132036549977:web:c683c53bc93219344ac048",
  measurementId: "G-Y1CSXK4VG7",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
