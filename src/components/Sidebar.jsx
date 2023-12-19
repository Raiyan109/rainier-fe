import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'
import { FaBars } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: ''
        },
        {
            path: "/patient",
            name: "Patient Profile",
            icon: ''
        },
        {
            path: "/appointments",
            name: "Appointments",
            icon: ''
        },
        {
            path: "/medicalHistory",
            name: "Medical History",
            icon: ''
        },
        {
            path: "/settings",
            name: "Settings",
            icon: ''
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;