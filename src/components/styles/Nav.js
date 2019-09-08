import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledNavCol = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  background-image: linear-gradient(var(--med-blue), var(--dark-blue), var(--dark-blue));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5000;
`;

export const StyledNavLink = styled(Link)`
  width: 65px;
  height: 65px;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'var(--dark-blue)' : 'white'};
  border-radius: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
  font-size: 1.2rem;
  text-decoration: none;
  span {
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    margin-top: 0.3rem;
  }
`;

export const StyledNavButton = styled.button`
  width: 65px;
  height: 65px;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'var(--dark-blue)' : 'white'};
  border-radius: 25%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
  font-size: 1.2rem;
  span {
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    margin-top: 0.3rem;
  }
`;