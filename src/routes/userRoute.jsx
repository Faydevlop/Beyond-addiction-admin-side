import React,{Suspense,lazy} from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import Login from "../page/Login";

const AdminDashboard = lazy(()=>import('../page/AdminDashboard'));
const ReportPage = lazy(()=>import('../page/Report'));
const CommunitiesPage = lazy(()=>import('../page/Communities'));
const ChallengesPage = lazy(()=>import('../page/Challenges'));
const LoginPage = lazy(()=>import('../page/Login'));


const UserRoute = () =>{

    return(
        <Suspense fallback={<p>Loading...</p>} >
            <Routes>
                <Route path="" element={<Navigate to='/login' />} />  
                <Route path="login" element={<LoginPage/>} />  
                <Route path="Dashboard" element={<AdminDashboard/>} />  
                <Route path="Reports" element={<ReportPage/>} />  
                <Route path="Communities" element={<CommunitiesPage/>} />  
                <Route path="Challenges" element={<ChallengesPage/>} />  
            </Routes>
        </Suspense>
    )
}

export default UserRoute