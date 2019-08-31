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

export const AddButton = styled(HomeButton)`
  margin: 1rem auto;
`;

export const DeleteButton = styled(HomeButton)`
  background-color: red;
  font-size: 1rem;
`;

export const EditButton = styled.button`
  font-family: "Roboto Mono";
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
  color: #FFFAFF;
  font-size: 1.8rem;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
`;