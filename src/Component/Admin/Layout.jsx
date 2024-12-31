import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdDashboard,   } from "react-icons/md";
import { FaRecycle } from "react-icons/fa6";
import { TbAlertSquareFilled,  } from "react-icons/tb";
import Login from "../Login";

import { useState } from "react";

const Layout = ({ children }) => {
  const navItems = [


    { title: "Home", to:"/AdminHome", className: "nav-item bt", icon: <TbAlertSquareFilled /> },
    { title: "View", to:"/AdminView", className: "nav-item bt", icon: <FaRecycle /> },
    { title: "About Us", to:"/AdminHome", className: "nav-item bt", icon: <MdDashboard/>},
    { title: "Contact Us", to:"/AdminHome", className: "nav-item bt", icon: <TbAlertSquareFilled /> },


   
  ];

  const [items, setItem] = useState(false)

  const togle = () => setItem(!items)
  console.log(items, "####################")



  return (
    <>
      <div className="row">
        
<Login/>
      </div>
      <span className="hum" onClick={togle} >&nbsp;&nbsp;&nbsp;<MdOutlineMenuOpen />

      </span>
      <div className="menu-icon-container">
      </div>
      <div className="row">
        <div className={items ? "col-sm-1 slide2 text-center" : "col-sm-2 slide  "}>
          {/* Sidebar */}
          <ul className="navbar-nav ms-3">
            {navItems.map((item, index) => (
              <li className={item.className} key={index}>
                <Link to={item.to} className="nav-link">
                  <span className="me-3 iconSize"> {item.icon}</span>
                  {items ? "" : item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={items ? "col-sm-11 border border-1" : "col-sm-10 border border-1"}>{children}</div>
      </div>
    </>
  );
};


export default Layout;

