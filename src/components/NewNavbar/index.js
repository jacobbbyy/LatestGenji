import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Nav, 
    NavLogo, 
    NavbarContainer, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLink,
    NavLinkPage
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import NavbarLogo from '../../assets/navbarlogo.png'
import Discord from '../../assets/discord_logo-01.png'
import Twitter from '../../assets/twitter_logo-01.png'



const NewNavbar = ({ toggle }) => {

    const connectWallet = () => {
        try {
          const resp = window.solana.connect();
          resp.publickKey.toString()
        } catch (err) {
    
        }
      }

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}><img width="150" src={NavbarLogo}></img></NavLogo>
            <MobileIcon onClick={toggle}>
               
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" >
                     <NavLink>
                        <NavLinkPage>
                        <Link style={{ textDecoration: 'none', color: '#fff'}} to="">
                               Community
                            </Link>
                        </NavLinkPage>
                     </NavLink>
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/genjimerch" >
                    <NavLink>
                        <NavLinkPage>
                        <Link style={{ textDecoration: 'none', color: '#fff'}} to="/genjimerch">
                               GenjiMerch
                            </Link>
                        </NavLinkPage>
                    </NavLink>
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">
                    <NavLink>
                        <NavLinkPage to=""> <Link style={{ textDecoration: 'none', color: '#fff'}} to="/gachapon">
                               Gachapon
                            </Link></NavLinkPage>
                    </NavLink>
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover"
                    >
                        <img width="35" src={Discord} />
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover"
                              
                    >
                        <img width="35" src={Twitter} />
                    </NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink onClick={connectWallet} to="">Connect Wallet</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
     );
}
 
export default NewNavbar;

