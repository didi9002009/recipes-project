import styled from 'styled-components';

export const HomeButton = styled.button`
  background-color: var(--dark-gray);
  color: white;
  font-weight: normal;
  font-size: 1rem;
  border-radius: 2.5rem;
  padding: 0.5rem 0.7rem;
  border: none;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

export const AddButton = styled(HomeButton)`
  margin: 1rem 0 0 0.5rem;
`;

export const DeleteButton = styled(HomeButton)`
  background-color: var(--dark-orange);
  color: white;
  font-size: 0.8rem;
`;

export const EditButton = styled.button`
  font-size: 0.9rem;
  background: none;
  border: none;
  padding: 0;
  text-transform: uppercase;
  color: var(--dark-orange);
  margin: 0 0 0 0.5rem;
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
  width: 1.2rem;
  height: 1.2rem;
  background-color: transparent;
  color: var(--dark-orange);
  border-radius: 2rem;
  border: none;
  margin: 0 0 0 0.2rem;
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