import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import JobVacancy from "../pages/jobvacancy/jobVacancy";
import LayoutLanding from "../pages/widgets/LayoutLanding";
import LayoutDashboard from "../pages/widgets/LayoutDashboard";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import Cookies from "js-cookie";

const RouterComponent = () => {

    const LoginRoutes = (props) => {
        if (Cookies.get('token') === undefined) {
            return props.children
        } else if (Cookies.get('token') !== undefined) {
            return <Navigate to={"/"}/>
        }
    }

    const DashboardRoutes = (props) => {
        if (Cookies.get('token') === undefined) {
            return <Navigate to={'/login'}/>
        } else if (Cookies.get('token') !== undefined) {
            return props.children
        }
    }

    return(
        <>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={
                        <LayoutLanding>
                            <Home />
                        </LayoutLanding>
                    } />
                    <Route path='/job-vacancy' element={
                        <LayoutLanding>
                            <JobVacancy />
                        </LayoutLanding>
                    } />

                    <Route path='/detail/:id' element={
                        <LayoutLanding>
                            <Detail />
                        </LayoutLanding>
                    } />
                    <Route path='/dashboard' element={
                        <DashboardRoutes>
                            <LayoutDashboard>
                                <Dashboard />
                            </LayoutDashboard>
                        </DashboardRoutes>
                    } />
                    <Route path='/dashboard/job-vacancy' element={
                        <DashboardRoutes>
                            <LayoutDashboard>
                                <JobVacancy />
                            </LayoutDashboard>
                        </DashboardRoutes>
                    } />
                    <Route path='/login' element={
                        <LoginRoutes>
                            <Login />
                        </LoginRoutes>
                    } />

                </Routes>
            
            </BrowserRouter>
        </>
    )
}

export default RouterComponent