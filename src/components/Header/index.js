import React from "react";
import { Link } from "react-router-dom";

//import assets from images folder
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from "../../images/tmdb_logo.svg";

//import styled components from the header .styles file
import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
            </Link>
            <TMBDLogoImg src={TMBDLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
)

export default Header