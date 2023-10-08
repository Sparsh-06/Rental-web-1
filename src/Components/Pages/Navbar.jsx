import { Link } from "react-router-dom"
import { useFirebase } from "../Backend Components/Context/Firebase";
import { Button, Flex, MenuButton, MenuDivider } from "@chakra-ui/react";
import { Menu, MenuList, MenuItem } from "@chakra-ui/react";
import '../Styles/Navbar.css'
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const firebase = useFirebase();
    return (
        <>
            <div className="navbar">
                <nav className="navgrid">
                    <li><b><Link to={'/'}>[Your Website]</Link></b></li>
                    <ul className="midgrid">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Service
                        </li>
                        <li>
                            Testimonial
                        </li>
                    </ul>
                    <li>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                                {firebase.islogged ? 'Menu' : 'Login'}
                            </MenuButton>
                            <MenuList>
                                <Link to={'/signup'}><MenuItem>Sign Up</MenuItem></Link>
                                <Link to={'/login'}><MenuItem>Login</MenuItem></Link>
                                <Link to={'/profile'}><MenuItem>Sell your Property</MenuItem></Link>
                                <MenuDivider/>
                                <Link to={'/profile'}><MenuItem>Login as Seller</MenuItem></Link>
                                {firebase.islogged ? <Link to={'/'} onClick={firebase.logout}><MenuItem>Logout</MenuItem></Link> : <></>}
                            </MenuList>
                        </Menu>
                    </li>
                </nav>
            </div>
        </>
    );
}