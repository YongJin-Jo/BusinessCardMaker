import './app.module.css';
import Login from './component/login';

function App({firebase}) {
  firebase.initializeApp(firebase.firebaseConfig);
  firebase.analytics();
  return(
    <>
      <header>
        <img src="../images/logo.png" alt=""/>
        <h1>Business Card Maker</h1>
      </header>
      <main>
       <Login/>

      </main>
      <footer>
        <span>Code your dream</span>
      </footer>
    </>
  )
}

export default App;
