/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadSessionFromLocal } from "../redux/action";
import * as Manager from "../pages/manager";
import * as Pages from "../pages";
import * as Employee from "../pages/employee";
import * as Admin from "../pages/admin";
import Config from "../config";
import loader from "../assets/images/loader.gif";

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Handle logout action on unauthorized api call
    if (Config.UNAUTHORIZED_EXCEPTION == true) {
      dispatch(logout());
      Config.UNAUTHORIZED_EXCEPTION = false;
      window.location = "/";
    }
  }, [Config.UNAUTHORIZED_EXCEPTION]);

  useEffect(() => {
    // This use Effect is only used to load local storage data into redux on page reload.
    dispatch(
      loadSessionFromLocal(
        localStorage.getItem("userSession")
          ? JSON.parse(localStorage.getItem("userSession"))
          : ""
      )
    );
  }, []);

  const NotFound = () => {
    return <h1>404 Not Found</h1>;
  };

  const Forbidden = () => {
    return <h1>403 Forbidden. You don t have access to this page.</h1>;
  };

  const RequireAdminAuth = () => {
    const { userSession } = useSelector((state) => state.session);
    if (userSession == null)
      return (
        <div className="preloader">
          <img src={loader} className="w-60" />
        </div>
      );
    else if (userSession == "")
      return <Navigate to="/" state={{ from: location }} />;
    else if (userSession?.role != "admin") return <Forbidden />;
    else return <Outlet />;
  };

  const RequireEmployeeAuth = () => {
    const { userSession } = useSelector((state) => state.session);

    if (userSession == null)
      return (
        <div className="preloader">
          <img src={loader} className="w-60" />
        </div>
      );
    else if (userSession == "")
      return <Navigate to="/" state={{ from: location }} />;
    else if (userSession?.role != "employee") return <Forbidden />;
    else return <Outlet />;
  };

  const RequireManagerAuth = () => {
    const { userSession } = useSelector((state) => state.session);

    if (userSession == null)
      return (
        <div className="preloader">
          <img src={loader} className="w-60" />
        </div>
      );
    else if (userSession == "")
      return <Navigate to="/" state={{ from: location }} />;
    else if (userSession?.role != "manager") return <Forbidden />;
    else return <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pages.Login />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<RequireAdminAuth />}>
            <Route path="/dashboard" element={<Admin.Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<RequireEmployeeAuth />}>
            <Route
              path="/employee-dashboard"
              element={<Employee.Dashboard />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<RequireManagerAuth />}>
            <Route path="/manager-dashboard" element={<Manager.Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
