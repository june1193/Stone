import './App.css'
import { LicenseInfo } from "@mui/x-license-pro";
import { MUI_LICENSE_KEY } from "./license";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./View/Home.jsx";
import File from './View/Skills/File.jsx';
import Grid from './View/Skills/Grid.jsx';
import Chart from './View/Skills/Chart.jsx';


function App() {
    LicenseInfo.setLicenseKey(MUI_LICENSE_KEY);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/file-test" element={<File />} />
              <Route path="/grid-test" element={<Grid />} />
              <Route path="/chart-test" element={<Chart />} />
          </Routes>
      </Router>
  )
}

export default App
