import styled from 'styled-components';

export const TabsContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5000;
  color: black;
`;

export const Tab = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active ? '#eeeeee' : '#FFFFFF'};
`;