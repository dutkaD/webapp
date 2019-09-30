import React from 'react';
import "./navigationStyle.css"


// todo: here add redux shit to handle links

function NavigationComponent(){

    return(
        <div>
        <nav>
            <h4 className="logo">fashion is my profession</h4>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="newcomings">New articles</a></li>
                <li><a href="auth">Topics</a></li>
            </ul>);
            <div className="burger" onClick={
                NavSlide
            }>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </nav>

        </div>
    )
}

const NavSlide = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');
    const links = document.querySelectorAll('.nav-links li');
    links.forEach((link, index)=> {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`;
        }
    });
};


export default NavigationComponent;
