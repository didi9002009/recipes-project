import React, { Component } from 'react';
import db from '../firebase';

class AddIngredient extends Component {
  state = {
    ingredientToAdd: {
      label: '',
      measurement: 0,
      unit: '',
      id: '',
    },
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
          measurement: 0,
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

  deleteIngredient = (id) => {
    console.log('Deleting: ', id)
    db.collection('ingredients').doc(id).delete()
    .then(() => console.log(`Document ${id} successfully deleted!`))
    .catch(error => console.log('Error removing document: ', error))
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
      <div className="add-ingredient">
        <h2>{this.state.ingredientToAdd.id ? 'Edit' : 'Add' } Ingredient</h2>
        <label htmlFor="label">
          Name:
          <input type="text" id="label" name="label" onChange={this.handleInputChange} value={this.state.ingredientToAdd.label} /><br />
        </label>
        <label htmlFor="measurement">
          Number:
          <input type="number" id="measurement" name="measurement" onChange={this.handleInputChange} value={this.state.ingredientToAdd.measurement} /><br />
        </label>
        <label htmlFor="unit">
          Unit:
          <input type="text" id="unit" name="unit" onChange={this.handleInputChange} value={this.state.ingredientToAdd.unit} /><br />
        </label>
        <button onClick={this.state.ingredientToAdd.id ? () => this.updateIngredient(this.state.ingredientToAdd.id) : this.addIngredient}>Save</button>
      </div>
    );
  }
}

export default AddIngredient;
