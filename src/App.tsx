import { useState } from "react"
import { AppInput } from "./components/AppInput"

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  
  return (
    <div>
      <AppInput onChange={setName} label="Imie" value={name} />
      <AppInput onChange={setSurname} label="Nazwisko" value={surname} />
    </div>
  )
}

export default App
