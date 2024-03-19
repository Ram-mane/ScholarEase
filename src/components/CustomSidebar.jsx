import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { doLogout, getCurrentUserDetails } from "../loggedInUser/loggeddetails";

const CustomSidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const loggedUser = getCurrentUserDetails();

  const handleLogout=()=>{
    doLogout(()=>{
      navigate('/login')
    })
    console.log("logout")
  }

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg navbar-light  "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavbarBrand
          href="/home"
          style={{ fontFamily: "cursive", fontWeight: "-moz-initial" }}
        >
          ScholarEase
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/home" style={{fontFamily:'cursive'}}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about" style={{fontFamily:'cursive'}}>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{fontFamily:'cursive'}}>
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/profile" style={{fontFamily:'cursive'}}>
                {loggedUser?.name}
                
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout} style={{fontFamily:'cursive', cursor:'pointer'}}>
                {" "}
                Logout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/profile" style={{fontFamily:'cursive'}}>
                {" "}
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomSidebar;
