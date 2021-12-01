import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import {Wrapper, Content } from "./BreadCrum.styles";

const BreadCrum = ({movieTitle}) => (

    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

BreadCrum.propTypes = {
    movieTitle: PropTypes.string,

}

export default BreadCrum