import styled from 'styled-components';

export const CardStyles = styled.div`
  border: 1px solid #eee;
  background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.6)),
    url('${props => props.bgImage ? props.bgImage : 'none'}');
  background-size: cover;
  background-position: center;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 48px -30px rgba(0,0,0,0.4);
  h2 {
    display: inline;
    background-color: var(--yellow);
    box-decoration-break: clone;
    font-size: 2em;
    padding: 0.2em;
    line-height: 1.8em;
  }
  p {
    margin: 1rem 0;
  }
`;

export const CardBody = styled.div`
  padding: 0.5rem 1rem;
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