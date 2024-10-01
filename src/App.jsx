
import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/DashBoard"
import Department from "./pages/Department"
import Employee from "./pages/Employee"
import Recruitment from "./pages/RecruitmentPage"
import Schedule from "./pages/Schedule"
import Settings from "./pages/Settings"
import Support from "./pages/Support"
import PageNotFound from "./pages/PageNotFound"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/department" element={<Department />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
