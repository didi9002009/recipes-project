import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import db from '../firebase';
import { IngredientsContainer, IngredientsList, JustifiedRow } from './styles/Views';
import { AddButton, DeleteButton, EditButton, MathButton } from './styles/Buttons';

class Ingredients extends Component {
  state = {
    ingredients: [],
  }

  componentDidMount = () => {
    // update on value change
    db.collection('ingredients').onSnapshot(snapshot => {
      let ingredients = snapshot.docs;
      let newState = [];
      for (let item in ingredients) {
        const ingredient = {
          ...ingredients[item].data(),
          id: ingredients[item].ref.id,
        };
        console.log('ingredient: ', ingredient)
        newState.push(ingredient);
      }
      this.setState({
        ingredients: newState,
      });
    });
  }

  editIngredient = (id) => {
    const targetIngredient = this.state.ingredients.find(item => item.id === id);
    this.props.setIngredientToEdit(targetIngredient);
  }

  resetEditIngredient = () => {
    this.setState({
      targetIngredient: null,
    });
  }

  deleteIngredient = (id) => {
    console.log('Deleting: ', id);
    db.collection('ingredients').doc(id).delete()
    .then(() => console.log(`Document ${id} successfully deleted!`))
    .catch(error => console.log('Error removing document: ', error));
  }

  updateIngredientMeasurement = (item, inc=true) => {
    const { id, measurement, label, unit } = item;
    const newMeasurement = inc ? parseInt(measurement) + 1 : parseInt(measurement) - 1;
    console.log(`Updating ${id}: `, newMeasurement);
    db.collection('ingredients').doc(id).set({
      measurement: newMeasurement >= 1 ? newMeasurement : 1,
      label,
      unit,
    })
    .then(() => console.log(`Document ${id} successfully updated!`))
    .catch(error => console.log('Error updating: ', error))
  }

  updateIngredient = (item) => {
    const { id, label, measurement, unit } = item;
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

  render() {
    return (
      <IngredientsContainer>
        <IngredientsList>
          <h1>My Pantry</h1>
          <Accordion allowZeroExpanded>
          { this.state.ingredients.map(item => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {item.label}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                    You have {item.measurement} {item.unit}.&nbsp;
                    <MathButton onClick={() => this.updateIngredientMeasurement(item, false)}>-</MathButton>&nbsp;
                    <MathButton onClick={() => this.updateIngredientMeasurement(item)}>+</MathButton>
                  </p>
                  <JustifiedRow>
                    <EditButton onClick={() => this.editIngredient(item.id)}>Edit</EditButton>&nbsp;
                    <DeleteButton onClick={() => this.deleteIngredient(item.id)}>Delete</DeleteButton>
                  </JustifiedRow>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
          </Accordion>
          <AddButton onClick={() => this.props.openModal(false)}>+ Ingredient</AddButton>
        </IngredientsList>
      </IngredientsContainer>
    );
  }
}

export default Ingredients;
