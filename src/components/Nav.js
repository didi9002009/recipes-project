import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAppleAlt, faBook, faMagic, faList } from '@fortawesome/free-solid-svg-icons';
import { StyledNavCol, StyledNavButton } from './styles/Nav';

const Nav = ({ handleChange, index, isHidden }) => !isHidden && (
  <StyledNavCol>
    <>
      <StyledNavButton onClick={(e) => handleChange(0)} active={index === 0} title="Home">
        <FontAwesomeIcon icon={faHome} size="1x" />
        <span>Home</span>
      </StyledNavButton>
      <StyledNavButton onClick={(e) => handleChange(1)} active={index === 1} title="Pantry">
        <FontAwesomeIcon icon={faAppleAlt} size="1x" />
        <span>Pantry</span>
      </StyledNavButton>
      <StyledNavButton onClick={(e) => handleChange(2)} active={index === 2} title="Recipes">
        <FontAwesomeIcon icon={faBook} size="1x" />
        <span>Recipes</span>
      </StyledNavButton>
      <StyledNavButton onClick={(e) => handleChange(3)} active={index === 3} title="Meal Wizard">
        <FontAwesomeIcon icon={faMagic} size="1x" />
        <span>Meal Wizard</span>
      </StyledNavButton>
      <StyledNavButton onClick={(e) => handleChange(4)} active={index === 4} title="Shopping List">
        <FontAwesomeIcon icon={faList} size="1x" />
        <span>Shopping List</span>
      </StyledNavButton>
    </>
  </StyledNavCol>
);

export default Nav;