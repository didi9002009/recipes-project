import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import db from '../firebase';

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
    this.props.setTargetIngredient(targetIngredient);
  }

  resetEditIngredient = () => {
    this.setState({
      targetIngredient: null,
    });
  }

  render() {
    return (
      <div className="ingredients">
        <h1>My Pantry</h1>
        <Accordion>
        { this.state.ingredients.map(item => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {item.label}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                Currently: {item.measurement} {item.unit}<br />
                <button onClick={() => this.deleteIngredient(item.id)}>Delete</button> | <button onClick={() => this.editIngredient(item.id)}>Edit</button>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        </Accordion>
      </div>
    );
  }
}

export default Ingredients;
