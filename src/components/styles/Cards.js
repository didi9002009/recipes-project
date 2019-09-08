import styled from 'styled-components';

export const CardStyles = styled.div`
  background-image: url('${props => props.bgImage ? props.bgImage : 'none'}'),
    linear-gradient(var(--light-orange), var(--dark-orange));
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 0.5rem 1rem; */
  min-height: 200px;
  box-shadow: 10px 10px 48px -30px rgba(0,0,0,0.4);
  border-radius: 2.5rem;
  border: ${props => props.bgImage ? '1px solid var(--light-blue)' : 'none'};
  position: relative;
  overflow: hidden;
  h2 {
    display: inline;
    background-color: ${props => props.bgImage ? 'var(--dark-orange)' : 'transparent'};
    color: white;
    box-decoration-break: clone;
    font-size: 2em;
    padding: 0.2em;
    line-height: ${props => props.bgImage ? '1.5em' : '1em'};
  }
  p {
    margin: 1rem 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .match {
    display: block;
    position: absolute;
    top: -50px;
    right: -50px;
    background-color: var(--dark-green);
    color: white;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transform: rotate(45deg);
    padding-bottom: 0.4rem;
    font-weight: bold;
  }
`;

export const CardBody = styled.div`
  z-index: 100;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;