import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css';


const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    return (
        <React.Fragment>
            {drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
            {/* {drawerIsOpen && <Backdrop />} */}
            {drawerIsOpen ? (<SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>) : null}
            {/* // <h1>부모 컴포넌트</h1> <<-- 부모 컴포넌트 구역 */}
            <MainHeader>
                {/* <p>MainHeader 태그 안쪽의 코드는 MainHeader(자식) 컴포넌트 구역을 렌더링 한다.</p> */}
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation;