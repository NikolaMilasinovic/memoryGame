import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({handleNewGame}) => {
    return(
      <header>
        <h2>Memory Game</h2>
        <nav>
          <li onClick={handleNewGame}>New Game</li>
        </nav>
      </header>
    )
}

Navbar.propTypes = {
  handleNewGame: PropTypes.func.isRequired
};


export default Navbar;
