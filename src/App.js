import React from "react"; 
import {useState} from "react"
import {MyContext} from "./provider/provider"
import Router from './routes/Router'


function App() {
  
const [globalState, setGlobalState] = useState();

  return (
    <div >
        
        <MyContext.Provider value={{globalState, setGlobalState}}>
          <Router/>
        </MyContext.Provider>
    </div>
  );
}

export default App;
