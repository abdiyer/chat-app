import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import React, { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Timeline } from "primereact/timeline"


function App() {
  const [author, setAuthor] = useState("")
  const [message, setMessage] = useState("") 
  const [messages, setMessages] = useState([{author:"Bot", message:"hello"},]) 
  return (
    <div className="p-col-3">
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="Name" value={author} onChange={(e)=>setAuthor(e.target.value)}></InputText>
          <InputText placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></InputText>
          <Button label="Send"/>
        </div>
    </div>
  );
}

export default App;
