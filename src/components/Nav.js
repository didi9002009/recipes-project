import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAppleAlt, faBook, faMagic, faList } from '@fortawesome/free-solid-svg-icons';
import { TabsContainer, Tab } from './styles/Nav';

const Nav = ({ handleChange, index }) => (
  <TabsContainer>
    <Tab active={index === 0}>
      <button onClick={(e) => handleChange(e, 0)}><FontAwesomeIcon icon={faHome} size="2x" /></button>
    </Tab>
    <Tab active={index === 1}>
      <button onClick={(e) => handleChange(e, 1)}><FontAwesomeIcon icon={faAppleAlt} size="2x" /></button>
    </Tab>
    <Tab active={index === 2}>
      <button onClick={(e) => handleChange(e, 2)}><FontAwesomeIcon icon={faBook} size="2x" /></button>
    </Tab>
    <Tab active={index === 3}>
      <button onClick={(e) => handleChange(e, 3)}><FontAwesomeIcon icon={faMagic} size="2x" /></button>
    </Tab>
    <Tab active={index === 4}>
      <button onClick={(e) => handleChange(e, 4)}><FontAwesomeIcon icon={faList} size="2x" /></button>
    </Tab>
  </TabsContainer>
);

export default Nav;