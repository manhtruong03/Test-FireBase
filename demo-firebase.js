import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDFAFl6lEMGHGzx7fTBJNiDUcH0uRpvdvg",
    authDomain: "haui-support-eop.firebaseapp.com",
    databaseURL: "https://haui-support-eop-default-rtdb.firebaseio.com",
    projectId: "haui-support-eop",
    storageBucket: "haui-support-eop.appspot.com",
    messagingSenderId: "156639345393",
    appId: "1:156639345393:web:2a9576e903b35331e04750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const content = document.documentElement.outerHTML;
set(ref(db, 'page/' + "page-001"), {
    content: content
})
alert('Saved');