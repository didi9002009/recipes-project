import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IngredientsContainer, IngredientsList, JustifiedRow } from './styles/Views';
import { DeleteButton, EditButton, MathButton, PlusButton } from './styles/Buttons';

const Ingredients = ({
  ingredients,
  openModal,
  updateIngredientMeasurement,
  editIngredient,
  deleteIngredient,
}) => (
  <IngredientsContainer>
    <IngredientsList>
      <JustifiedRow>
        <h1>My Pantry</h1>
        <PlusButton onClick={() => openModal(false)}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </JustifiedRow>
      <Accordion allowZeroExpanded>
      { ingredients.map(item => (
        <AccordionItem key={item.id}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {item.label}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <p>
                You have {item.measurement} {item.unit}.&nbsp;
                <MathButton onClick={() => updateIngredientMeasurement(item, false)}>-</MathButton>&nbsp;
                <MathButton onClick={() => updateIngredientMeasurement(item)}>+</MathButton>
              </p>
              <JustifiedRow>
                <EditButton onClick={() => editIngredient(item.id)}>Edit</EditButton>&nbsp;
                <DeleteButton onClick={() => deleteIngredient(item.id)}>Delete</DeleteButton>
              </JustifiedRow>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
      </Accordion>
    </IngredientsList>
  </IngredientsContainer>
);

export default Ingredients;
