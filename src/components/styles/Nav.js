import styled from 'styled-components';

export const TabsContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
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
  button {
    background: ${props => props.active ? 'var(--red)' : 'transparent'};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: ${props => props.active ? '2px solid var(--red)' : '2px solid var(--light-gray)'};
    transition: background 200ms ease-in,
      border 200ms ease-in;
    &:hover {
      border: ${props => props.active ? '2px solid var(--red)' : '2px solid var(--dark-gray)'};
    }
    svg, path {
      fill: ${props => props.active ? 'white' : 'var(--dark-gray)'};
      transition: fill 100ms ease-in;
    }
  }
`;