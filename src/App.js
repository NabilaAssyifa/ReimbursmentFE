import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";

import Sidebar from "./components/sidebar";
import DashboardMember from "./pages/member/dashboard.jsx";
import ProjectMember from "./pages/member/project.jsx";
import ReimburseMember from "./pages/member/reimburse.jsx";
import RiwayatMember from "./pages/member/riwayat.jsx";
import ApprovalMember from "./pages/member/approval.jsx";
import DetailRiwayat from "./pages/member/detailriwayat.jsx";
import DetailApproval from "./pages/member/detailapproval.jsx";


import SidebarSV from "./components/sidebarsv";
import DashboardSV from "./pages/supervisor/dashboard.jsx";
import ProjectSV from "./pages/supervisor/project.jsx";
import ReimburseSV from "./pages/supervisor/reimburse.jsx";
import RiwayatSV from "./pages/supervisor/riwayat.jsx";
import ApproveSV from "./pages/supervisor/approve.jsx";

import SidebarF from "./components/sidebarf";
import DashboardF from "./pages/finance/dashboard.jsx";
import ProjectF from "./pages/finance/project.jsx";
import ReimburseF from "./pages/finance/reimburse.jsx";
import RiwayatF from "./pages/finance/riwayat.jsx";
import VerifF from "./pages/finance/verif.jsx";

import SidebarR from "./components/sidebarre";
import DashboardR from "./pages/realisasi/dashboard.jsx";
import VerifR from "./pages/realisasi/verif.jsx";
import RiwayatR from "./pages/realisasi/riwayat.jsx";

import Footer from "./components/footer";
import Header from "./components/header";


function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route
          path="/realisasi/detailriwayat"
          element={
            <>
              <SidebarR/>
              <Header/>
              <DetailRiwayat/> 
              <Footer/>   
            </>
          }
        />

      <Route
          path="/realisasi/riwayat"
          element={
            <>
              <SidebarR/>
              <Header/>
              <RiwayatR/> 
              <Footer/>   
            </>
          }
        />
      <Route
          path="/realisasi/verif"
          element={
            <>
              <SidebarR/>
              <Header/>
              <VerifR/>  
              <Footer/> 

            </>
          }
        />
      <Route
          path="/realisasi/dashboard"
          element={
            <>
              <SidebarR/>
              <Header/>
              <DashboardR/> 
              <Footer/> 

            </>
          }
        />

      <Route
          path="/finance/detailriwayat"
          element={
            <>
              <SidebarF/>
              <Header/>
              <DetailRiwayat/>  
              <Footer/> 

            </>
          }
      />  

      <Route
          path="/finance/verif"
          element={
            <>
              <SidebarF/>
              <Header/>
              <VerifF/>  
              <Footer/> 

            </>
          }
        />
      <Route
          path="/finance/riwayat"
          element={
            <>
              <SidebarF/>
              <Header/>
              <RiwayatF/>  
              <Footer/> 

            </>
          }
        />
      <Route
          path="/finance/reimburse"
          element={
            <>
              <SidebarF/>
              <Header/>
              <ReimburseF/> 
              <Footer/> 
            </>
          }
        />
      <Route
          path="/finance/project"
          element={
            <>
              <SidebarF/>
              <Header/>
              <ProjectF/> 
              <Footer/> 
            </>
          }
        />
      <Route
          path="/finance/dashboard"
          element={
            <>
              <SidebarF/>
              <Header/>
              <DashboardF/>   
              <Footer/> 
            </>
          }
        />

        <Route
          path="/supervisor/detailriwayat"
          element={
            <>
              <SidebarSV/>
              <Header/>
              <DetailRiwayat/>  
              <Footer/> 
            </>
          }
        />

      <Route
          path="/supervisor/approve"
          element={
            <>
              <SidebarSV/>
              <Header/>
              <ApproveSV/>  
              <Footer/> 
            </>
          }
        />
      <Route
          path="/supervisor/riwayat"
          element={
            <>
              <SidebarSV/>
              <Header/>
              <RiwayatSV/>   
              <Footer/> 
            </>
          }
        />
      <Route
          path="/supervisor/reimburse"
          element={
            <>
              <SidebarSV/>
              <Header/>
              <ReimburseSV/>  
              <Footer/> 
            </>
          }
        />
      <Route
          path="/supervisor/project"
          element={
            <>
              <SidebarSV/>
              <Header/>
              <ProjectSV/>   
              <Footer/> 
            </>
          }
        />
      <Route
          path="/supervisor/dashboard"
          element={
            <>
              <Header/>
              <SidebarSV/>
              <DashboardSV/> 
              <Footer/> 
            </>
          }
        />
        <Route
          path="/member/detailapproval"
          element={
            <>
              <Sidebar />
              <Header/>
              <DetailApproval /> 
              <Footer/>
  
            </>
          }
        />
        <Route
          path="/member/detailriwayat"
          element={
            <>
              <Sidebar />
              <Header/>
              <DetailRiwayat /> 
              <Footer/>
  
            </>
          }
        />
        <Route
          path="/member/approval"
          element={
            <>
              <Sidebar />
              <Header/>
              <ApprovalMember/>   
              <Footer/>
            </>
          }
        />
        
      <Route
          path="/member/riwayat"
          element={
            <>
              <Sidebar />
              <Header/>
              <RiwayatMember />
              <Footer/>
            </>
          }
        />
      <Route
          path="/member/reimburse"
          element={
            <>
              <Sidebar />
              <Header/>
              <ReimburseMember /> 
              <Footer/> 
            </>
          }
        />
      <Route
          path="/member/project"
          element={
            <>
              <Sidebar />
              <Header/>
              <ProjectMember />  
              <Footer/> 
            </>
          }
        />
        <Route
          path="/member/dashboard"
          element={
            <>
              
              <Header/>
              <Sidebar />
              <DashboardMember />  
              <Footer/> 
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Login/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;