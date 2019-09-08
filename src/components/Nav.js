import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAppleAlt, faBook, faMagic, faList } from '@fortawesome/free-solid-svg-icons';
import { StyledNavCol, StyledNavLink, StyledNavButton } from './styles/Nav';

const Nav = ({ handleChange, index, isHidden, path }) => !isHidden && (
  <StyledNavCol>
    { path === '/' ? (
      <>
        <StyledNavButton onClick={(e) => handleChange(e, 0)} active={index === 0} title="Home">
          <FontAwesomeIcon icon={faHome} size="1x" />
          <span>Home</span>
        </StyledNavButton>
        <StyledNavButton onClick={(e) => handleChange(e, 1)} active={index === 1} title="Pantry">
          <FontAwesomeIcon icon={faAppleAlt} size="1x" />
          <span>Pantry</span>
        </StyledNavButton>
        <StyledNavButton onClick={(e) => handleChange(e, 2)} active={index === 2} title="Recipes">
          <FontAwesomeIcon icon={faBook} size="1x" />
          <span>Recipes</span>
        </StyledNavButton>
        <StyledNavButton onClick={(e) => handleChange(e, 3)} active={index === 3} title="Meal Wizard">
          <FontAwesomeIcon icon={faMagic} size="1x" />
          <span>Meal Wizard</span>
        </StyledNavButton>
        <StyledNavButton onClick={(e) => handleChange(e, 4)} active={index === 4} title="Shopping List">
          <FontAwesomeIcon icon={faList} size="1x" />
          <span>Shopping List</span>
        </StyledNavButton>
      </>
    )
    : (
      <>
        <StyledNavLink to="/" state={{ index: 0 }} title="Home">
          <FontAwesomeIcon icon={faHome} size="1x" />
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to="/" state={{ index: 1 }} title="Pantry">
          <FontAwesomeIcon icon={faAppleAlt} size="1x" />
          <span>Pantry</span>
        </StyledNavLink>
        <StyledNavLink to="/" state={{ index: 2 }} title="Recipes">
          <FontAwesomeIcon icon={faBook} size="1x" />
          <span>Recipes</span>
        </StyledNavLink>
        <StyledNavLink to="/" state={{ index: 3 }} title="Meal Wizard">
          <FontAwesomeIcon icon={faMagic} size="1x" />
          <span>Meal Wizard</span>
        </StyledNavLink>
        <StyledNavLink to="/" state={{ index: 4 }} title="Shopping List">
          <FontAwesomeIcon icon={faList} size="1x" />
          <span>Shopping List</span>
        </StyledNavLink>
      </>
    )}
  </StyledNavCol>
);

export default Nav;