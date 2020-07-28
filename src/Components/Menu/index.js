import React from 'react';
import Logo from '../../assets/img/Alura_Logo2.png';
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu (){
    return(
        <nav className="Menu"> 

            <a href="/">
            <img className="Logo" src={Logo} alt="LeoFlix"  />
            </a>

            <Button className="ButtonLink" href="/">
            Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;