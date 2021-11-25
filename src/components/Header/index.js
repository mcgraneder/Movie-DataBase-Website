import React from "react";

//import assets from images folder
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from "../../images/tmdb_logo.svg";

//import styled components from the header .styles file
import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
            <TMBDLogoImg src={TMBDLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
)

export default Header