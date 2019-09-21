import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
import { CloseButton } from './styles/Buttons';
import AddRecipe from './AddRecipe';
import AddIngredient from './AddIngredient';
import AddListIngredient from './AddListIngredient';
import { openModal, closeModal } from '../actions/app';

Modal.setAppElement('#root');

const StyledModal = styled(Modal)`
  background: var(--tea);
  border: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: ${props => props.scrollable ? 'flex-start' : 'center'};
  animation: pop-up 200ms;
  z-index: 10000;
  &:focus {
    outline: none;
  }
`;

class FormModal extends Component {
  render() {
    const { closeModal, app } = this.props;
    const { isModalOpen, isRecipeModal, isIngredientModal, isListIngredientModal } = app;
    return (
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        scrollable={isRecipeModal}
      >
        <CloseButton onClick={closeModal}>&times;</CloseButton>
          { isRecipeModal && <AddRecipe /> }
          { isIngredientModal && <AddIngredient /> }
          { isListIngredientModal && <AddListIngredient /> }
      </StyledModal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps, { openModal, closeModal })(FormModal);