import MenuBar from "./components/MenuBar"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/DashBoard"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App
