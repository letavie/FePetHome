import React from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
        navigate("/login");
    };
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 text-gray-100">
            <div className="flex items-center justify-center h-16 border-b border-gray-700">
                <h2 className="text-2xl font-bold">Trang admin</h2>
            </div>
            <ul className="flex-grow">
                <Link to="/admin/accounts">
                    <li className="flex items-center p-4 text-gray-100 hover:bg-gray-700 cursor-pointer">
                        <ManageAccountsIcon className="mr-3" />
                        <span>Quản lý tài khoản</span>
                    </li>
                </Link>
                <Link to="/admin/dashboard">
                    <li className="flex items-center p-4 text-gray-100  hover:bg-gray-700 cursor-pointer">
                        <DashboardIcon className="mr-3" />
                        <span>Dashboard</span>
                    </li>
                </Link>
                <div
                    className="flex items-center p-4 text-gray-100  hover:bg-gray-700 cursor-pointer"
                    onClick={handleLogout}
                >
                    <LogoutIcon className="mr-3" />
                    <span>Log Out</span>
                </div>
            </ul>
        </div>
    );
};

export default AdminSidebar;
