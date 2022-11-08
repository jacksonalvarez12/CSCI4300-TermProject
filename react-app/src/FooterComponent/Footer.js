import './Footer.css';
import React from 'react';

const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <Box>
            <button>Add Recipie</button>
            <p>Created by Colby Eskew, Jackson Alvarez, and Joshua Bisnott</p>
        </Box>
    );

}

export default Footer;
