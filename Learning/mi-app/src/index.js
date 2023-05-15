import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const Li = ({ children, estado, casa, edad }) => {
  //console.log(casa, edad);
  //return(
    //<li>{estado}{children}</li>
  //)
//}
//const X = () =>
  //<ul>
    //<Li 
      //estado={'linda'}
      //casa={true}
      //edad={28}
    //>Mochi
    //</Li>
    //<Li estado={'Hola soy '}>Laikita</Li>
    //<Li estado={'Hola soy '}>Simoniky</Li>
    //<Li estado={'Hola soy '}>Edu</Li>
  //</ul>

//root.render(<X/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
