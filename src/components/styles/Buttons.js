import styled from 'styled-components';

export const HomeButton = styled.button`
  background-color: ${props => props.blue ? '#3E92CC' : '#D8315B'};
  color: #FFFAFF;
  font-family: "Roboto Mono";
  font-weight: normal;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding: 0.66rem 1rem;
  border: none;
  margin-bottom: 1rem;
`;