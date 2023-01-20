import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Notificacoes from '../../assets/notifications.svg';
import Menu from '../../assets/menu.svg';

function Header() {

    // let menu = document.querySelector('.menu');
    // let navbar = document.querySelector('.navbar');

    // menu.onclick = () => {
    //     menu.classList.toggle('.menu');
    //     navbar.classList.toggle('.open');
    // }


    return (
        <div className="header">
            <div className="menu"><img src={Menu} alt="" /></div>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="btns">
                <div className="navbar">
                    <Link to='/Modalidades'><li>Jogar agora</li></Link>
                    <Link to='/Help'><li>Ajuda</li></Link>
                </div>
                <Link to='/Notification'><img src={Notificacoes} alt="Botão de notificações" className='btn-notifi' /></Link>
                <div className='modalogin'>
                    <button className='btn-login' onClick={() => console.log('clicou')}>Entrar</button>
                </div>
            </div>
        </div>
    );
}

export default Header;