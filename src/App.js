import "./App.css";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from "react"


function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  // const removeClasses = ()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = (cls)=>{
    // Always remove previous classes first
  document.body.classList.remove(
    "bg-primary",
    "bg-success",
    "bg-warning",
    "bg-danger",
    "bg-light",
    "bg-dark"
  );
    // 👉 If user clicked on a color square
    if (cls) {
      console.log(cls)
      document.body.classList.add("bg-" + cls);
      document.body.style.backgroundColor = ""; // clear custom color
      showAlert(`${cls} theme applied`, "success");
      return; // stop here, no dark/light toggle
    }
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2f324f';
      // document.title = 'TextUtils - Dark mode'
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark mode Enabeld'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils - Enabel light mode'
      // }, 2000);
      showAlert('Dark mode is Enabled', 'success') 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - light mode'
      showAlert('Light mode is Enabled', 'success')
    }
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  }
  return (
    <>
     <Router>
        <Navbar title='textutils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        {/* <Navbar /> */}
        {/* <div className="container">
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
          <About/>
        </div> */}
          <div className="container my-3">
        <Routes>
          <Route path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter your text to analyze"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
      </Router>  
    </>
  );
}

export default App;
