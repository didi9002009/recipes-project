import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAppleAlt, faBook, faMagic, faList } from '@fortawesome/free-solid-svg-icons';
import { TabsContainer, Tab } from './styles/Nav';

const Nav = ({ handleChange, index, isHidden }) => !isHidden && (
  <TabsContainer>
    <Tab active={index === 0}>
      <button onClick={(e) => handleChange(e, 0)} title="Home">
        <FontAwesomeIcon icon={faHome} size="3x" className="big-icon" />
        <FontAwesomeIcon icon={faHome} size="2x" className="small-icon" />
        <span>Home</span>
      </button>
    </Tab>
    <Tab active={index === 1}>
      <button onClick={(e) => handleChange(e, 1)} title="Ingredients">
        <FontAwesomeIcon icon={faAppleAlt} size="3x" className="big-icon" />
        <FontAwesomeIcon icon={faAppleAlt} size="2x" className="small-icon" />
        <span>Ingredients</span>
      </button>
    </Tab>
    <Tab active={index === 2}>
      <button onClick={(e) => handleChange(e, 2)} title="Recipes">
        <FontAwesomeIcon icon={faBook} size="3x" className="big-icon" />
        <FontAwesomeIcon icon={faBook} size="2x" className="small-icon" />
        <span>Recipes</span>
      </button>
    </Tab>
    <Tab active={index === 3}>
      <button onClick={(e) => handleChange(e, 3)} title="Meal Wizard">
        <FontAwesomeIcon icon={faMagic} size="3x" className="big-icon" />
        <FontAwesomeIcon icon={faMagic} size="2x" className="small-icon" />
        <span>Meal Wizard</span>
      </button>
    </Tab>
    <Tab active={index === 4}>
      <button onClick={(e) => handleChange(e, 4)} title="Shopping List">
        <FontAwesomeIcon icon={faList} size="3x" className="big-icon" />
        <FontAwesomeIcon icon={faList} size="2x" className="small-icon" />
        <span>Shopping List</span>
      </button>
    </Tab>
  </TabsContainer>
);

export default Nav;