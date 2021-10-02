import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';




function App() {

  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }


  return (

    
    <div className="App" id="Google">
      <br/><br/><h3>Inicar Seccion Grupo Eco-J2</h3><br/><br/><br/><br/><br/>
      
      <GoogleLogin
        clientId="1057272616911-hrn38a0o5nfkhjt4mamj27fiob0o5706.apps.googleusercontent.com"
        buttonText="Inciar Con Google"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />

    </div>




  );
}


export default App;