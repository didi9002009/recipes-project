import styled from 'styled-components';

export const StyledFormGroup = styled.div`
  width: 70%;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  h1 {
    margin: 2rem 0;
  }
`;

export const StyledInputGroup = styled.div`
  grid-column: ${props => props.half ? props.second ? '2 / 3' : '1 / 2' : '1 / 3'};
  width: 100%;
  margin-bottom: 2rem;
  .error-msg {
    color: var(--red);
  }
  img {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
  input {
    height: 2rem;
  }
  input, textarea {
    width: 100%;
    border: none;
    background-color: var(--tea);
    border-bottom: 2px solid black;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    padding: 0.2rem;
    &.error {
      border-bottom: 2px solid var(--red);
    }  
  }
  input[type="file"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Roboto Mono";
  font-size: 1rem;
  display: block;
  &.file-label {
    display: inline-block;
    font-family: "Roboto";
    font-size: 1.2rem;
    border-radius: 2rem;
    padding: 0.66rem 1rem;
    border: 2px solid black;
  }
`;

export const StyledSubmitButton = styled.button`
  border: 2px solid black;
  background-color: var(--tea);
  font-size: 1.2rem;
  padding: 0.66rem 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
`;