import './App.css'
import { LicenseInfo } from "@mui/x-license-pro";
import { MUI_LICENSE_KEY } from "./license";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./View/Home.jsx";
import AuthByMenuManage from './View/Standard/AuthByMenuManage.jsx';


function App() {
    LicenseInfo.setLicenseKey(MUI_LICENSE_KEY);
    /*
    @mui/x-data-grid-pro 6.x ������ React 17, 18�� ����
    ���� ������Ʈ�� React 19 ��� ���̶� ���� �ȵ� -> ����Ʈ �ٿ�׷��̵�
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
