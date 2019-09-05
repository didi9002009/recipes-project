import styled from 'styled-components';

export const TabsContainer = styled.nav`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5000;
  color: black;
  @media screen and (min-width: 701px) {
    top: 0;
    margin: 0 auto;
    padding: 1rem 10vw;
  }
  @media screen and (max-width: 700px) {
    bottom: 0;
  }
`;

export const Tab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen and (min-width: 701px) {
    border-right: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
    &:last-child {
      border-right: none;
    }
  } */
  button {
    transition: background 200ms ease-in,
      border 200ms ease-in;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      background: ${props => props.active ? 'var(--red)' : 'transparent'};
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: ${props => props.active ? '2px solid var(--red)' : '2px solid var(--light-gray)'};
      &:hover {
        border: ${props => props.active ? '2px solid var(--red)' : '2px solid var(--dark-gray)'};
      }
    }
    span {
      display: none;
      visibility: hidden;
      transition: color 100ms ease-in;
      @media screen and (min-width: 701px) {
        font-family: "Roboto Mono";
        display: block;
        visibility: visible;
        letter-spacing: 1.5px;
        font-size: 0.9rem;
        text-transform: uppercase;
        margin-top: 0.8rem;
        color: ${props => props.active ? 'var(--red)' : 'var(--dark-gray)'};
      }
    }
    svg, path {
      transition: fill 100ms ease-in;
      @media screen and (min-width: 701px) {
        &.small-icon {
          display: none;
          visibility: hidden;
        }
        &.big-icon {
          display: block;
          visibility: visible;
        }
        fill: ${props => props.active ? 'var(--red)' : 'var(--dark-gray)'};
      }
      @media screen and (max-width: 700px) {
        fill: ${props => props.active ? 'white' : 'var(--dark-gray)'};
        &.small-icon {
          display: block;
          visibility: visible;
        }
        &.big-icon {
          display: none;
          visibility: hidden;
        }
      }
    }
  }
`;