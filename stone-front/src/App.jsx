import './App.css'
import { LicenseInfo } from "@mui/x-license-pro";
import { MUI_LICENSE_KEY } from "./license";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./View/Home.jsx";
import AuthByMenuManage from './View/Standard/AuthByMenuManage.jsx';


function App() {
    LicenseInfo.setLicenseKey(MUI_LICENSE_KEY);
    /*
    @mui/x-data-grid-pro 6.x 버전은 React 17, 18만 지원
    현재 프로젝트는 React 19 사용 중이라 지원 안됨 -> 리엑트 다운그레이드
    */

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Pagetwo" element={<AuthByMenuManage />} />
          </Routes>
      </Router>
  )
}

export default App
