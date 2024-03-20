// import About from "./modules/About";
import Alerts from "./modules/Alerts";
import Navbar from "./modules/Navbar";
import TectForm from "./modules/TectForm";
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');

  const toogleMode =()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=> {
    setAlert({ 
      msg : message,
      type : type
     })
     setTimeout(()=>{
      setAlert(null)
     }, 1500
     )

}

  return (
<>
<Navbar title = "TextUtils" mode={mode}  tooglesMode={toogleMode}/>
<Alerts alert={alert} />
<TectForm mode= {mode}  showAlert={showAlert} />

{/* <About></About> */}
</>
  );
}

export default App;
