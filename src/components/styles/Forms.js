import styled from 'styled-components';
import { HomeButton } from './Buttons';

export const StyledFormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  width: 80%;
  h2 {
    grid-column: 1 / 3;
  }
`;

export const StyledInputGroup = styled.div`
  grid-column: ${props => props.half ? props.second ? '2 / 3' : '1 / 2' : '1 / 3'};
`;

export const StyledLabel = styled.label`
  font-family: "Roboto Mono";
  font-size: 0.8rem;
  display: block;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 1.2rem;
  padding: 0.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255,255,255,0.4);
  margin-bottom: 1rem;
  color: #FFFAFF;
  &:focus {
    border-bottom: 2px solid rgba(255,255,255,0.8);
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 1.2rem;
  padding: 0.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255,255,255,0.4);
  margin-bottom: 1rem;
  color: #FFFAFF;
  resize: none;
  &:focus {
    border-bottom: 2px solid rgba(255,255,255,0.8);
    outline: none;
  }
`;

export const StyledSubmitButton = styled(HomeButton)`
  background-color: #FFFAFF;
  color: #D8315B;
  font-size: 1rem;
`;