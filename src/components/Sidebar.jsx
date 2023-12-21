import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'
import { FaBars } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import home from '../assets/Icon_Home.png'
import patient from '../assets/Icon_Patient Profile.png'
import appointment from '../assets/Icon_Appointment.png'
import history from '../assets/Icon_medical history.png'
import settings from '../assets/Icon_Settings.png'
import bar from '../assets/Icon_Menu.png'
import leftArrow from '../assets/Icon_SideArrow_round.png'
import logo from '../assets/Icon_Vector.png'

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: home
        },
        {
            path: "/patient",
            name: "Patient Profile",
            icon: patient
        },
        {
            path: "/appointments",
            name: "Appointments",
            icon: appointment
        },
        {
            path: "/medicalHistory",
            name: "Medical History",
            icon: history
        },
        {
            path: "/settings",
            name: "Settings",
            icon: settings
        }
    ]
    return (
        <div className="sidebar-container">
            <div style={{ width: isOpen ? "450px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ display: isOpen ? "block" : "none" }} >
                        <div className="logo flex">
                            <img src={logo} alt="" />
                            <h1 className="font-medium">Medi<span className="text-[#FF7594]">Doc</span></h1>
                        </div>
                    </div>
                    <div style={{ marginLeft: isOpen ? "50px" : "-15px" }} className="bars">
                        {isOpen ?
                            <p style={{ marginRight: '-50px' }}><img src={leftArrow} alt="" onClick={toggle}
                            /></p>
                            : <FaBars onClick={toggle} />}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <img className="icon" src={item.icon} alt="" />
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className="main">{children}</main>
        </div>
    );
};

export default Sidebar;