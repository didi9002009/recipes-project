import React, { Component } from 'react';
import db from '../firebase';
import { StyledFormGroup, StyledInputGroup, StyledInput, StyledLabel, StyledSubmitButton } from './styles/Forms';

class AddIngredient extends Component {
  state = {
    ingredientToAdd: {
      label: '',
      measurement: '',
      unit: '',
      id: '',
    },
  }

  componentDidMount = () => {
    if (this.props.ingredientToEdit) {
      this.setState({
        ingredientToAdd: this.props.ingredientToEdit,
      });
    }
  }

  componentDidUpdate = (_, prevState) => {
    if (!this.props.ingredientToEdit) return;
    if (!this.props.ingredientToEdit.id) return;
    if (this.props.ingredientToEdit.id !== prevState.ingredientToAdd.id) {
      this.setState({
        ingredientToAdd: this.props.ingredientToEdit,
      })
    }
  }

  addIngredient = () => {
    const { label, measurement, unit } = this.state.ingredientToAdd;
    console.log('Adding: ', label, measurement, unit)
    db.collection('ingredients').add({
      label,
      measurement,
      unit
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef);
      this.setState({
        ingredientToAdd: {
          label: '',
          measurement: '',
          unit: '',
        }
      });
    })
    .catch(error => console.log('Error adding document: ', error));
  }

  updateIngredient = (id) => {
    const { label, measurement, unit } = this.state.ingredientToAdd;
    console.log(`Updating ${id}: `, label, measurement, unit);
    db.collection('ingredients').doc(id).set({
      label,
      measurement,
      unit
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
    this.setState({
      ingredientToAdd: {
        label: '',
        measurement: '',
        unit: '',
        id: '',
      }
    })
    this.props.resetEditIngredient();
  }

  handleInputChange = (event) => {
    this.setState({
      ingredientToAdd: {
        ...this.state.ingredientToAdd,
        [event.target.name]: event.target.value,
      }
    });
  }

  render() {
    return (
      <StyledFormGroup>
        <h2>{this.state.ingredientToAdd.id ? 'Edit' : 'Add' } Ingredient</h2>
        <StyledInputGroup>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            id="label"
            name="label"
            onChange={this.handleInputChange}
            value={this.state.ingredientToAdd.label}
          />
        </StyledInputGroup>
        <StyledInputGroup half>
          <StyledLabel>Amount</StyledLabel>
          <StyledInput 
            type="number"
            id="measurement"
            name="measurement"
            onChange={this.handleInputChange}
            value={this.state.ingredientToAdd.measurement}
          />
        </StyledInputGroup>
        <StyledInputGroup half second>
          <StyledLabel>Unit</StyledLabel>
          <StyledInput
            type="text"
            id="unit"
            name="unit"
            onChange={this.handleInputChange}
            value={this.state.ingredientToAdd.unit}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledSubmitButton
            onClick={this.state.ingredientToAdd.id ? () => this.updateIngredient(this.state.ingredientToAdd.id) : this.addIngredient}
          >
            Save
          </StyledSubmitButton>
        </StyledInputGroup>
      </StyledFormGroup>
    );
  }
}

export default AddIngredient;
