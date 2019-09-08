import styled from 'styled-components';

export const HomeButton = styled.button`
  width: 80%;
  background-color: var(--yellow);
  font-weight: normal;
  font-size: 1.2rem;
  border-radius: 2rem;
  padding: 0.66rem 1rem;
  border: none;
  margin-bottom: 1rem;
`;

export const AddButton = styled(HomeButton)`
  width: auto;
  margin: 1rem auto;
`;

export const DeleteButton = styled(HomeButton)`
  width: auto;
  background-color: var(--red);
  color: white;
  font-size: 1rem;
`;

export const EditButton = styled.button`
  font-size: 1rem;
  background: none;
  border: none;
  padding: 0;
  font-weight: bold;
  text-decoration: underline;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: black;
  font-size: 1.8rem;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const MathButton = styled.button`
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--dark-gray);
  color: white;
  border: none;
  border-radius: 2rem;
`;

export const PlusButton = styled.button`
  border: none;
  background: var(--red);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  svg, path {
    fill: white;
  }
`;

export const StyledCardButton = styled.button`
  background-color: white;
  color: var(--dark-gray);
  border-radius: 2.5rem;
  border: none;
  padding: 0.5rem 0.7rem;
  font-size: 0.8rem;
  font-weight: bold;
`;