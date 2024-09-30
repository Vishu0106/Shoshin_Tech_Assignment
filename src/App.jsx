import MenuBar from "./components/MenuBar"
import { Route, Routes } from "react-router-dom"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MenuBar />} />
    </Routes>
  )
}

export default App
