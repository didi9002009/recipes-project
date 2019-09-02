import styled from 'styled-components';

export const CardStyles = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
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