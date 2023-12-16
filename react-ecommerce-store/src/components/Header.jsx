import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


function Header() {

    const Header = styled.header`
    background-color: #626285;
    height: 55px;
    width: 100%;
`

    const Nav = styled.nav`

    `

    const Li = styled.li`
        display: inline-block;
    
    `

    const Ul = styled.ul`
        margin: 0;
    `
    return (
        <Header>
            <Nav>
                <Ul>
                    <Li>
                        <Link to={"/"}>Home</Link>
                    </Li>
                    <Li>
                        <Link to={"/Contact"}>Contact</Link>
                    </Li>
                </Ul>
            </Nav>
        </Header>
        )

}

export default Header;