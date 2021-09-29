import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



import style from '../../../styles/components/Shared/Navbar.module.css';

export function Navbar() {
    const [padding, setPedding] = useState("");
    const [fontSize, setFontSize] = useState("");
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            scrollFunction();
        }
    })
   
    const scrollFunction = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setPedding("10px 10px");
            setFontSize("25px");
          } else {
            setPedding("35px 10px");
            setFontSize("35px");
          }
    }

    const navItensUncollapsed = () => {
        const newStateCollapse = !collapse;
        setCollapse(newStateCollapse);
    }

    return (
        <header>
            <nav className={style.navbar} style={{ padding }} id="navbar">
                <a href="#default" className={style.logo} style={{ fontSize }} >CompanyLogo</a>
                <button className={style.navbarToggler} type="button" onClick={() => { navItensUncollapsed() }}>
                    <span className={style.navbarTogglerIcon}>
                       <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>
                <div className={collapse ? style.navbarRight : `${style.navbarRight} ${style.navbarRightUncolapsed}`}>
                    <a className={style.active} href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </nav> 
        </header>
    )
}


