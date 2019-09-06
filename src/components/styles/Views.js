import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: var(--dark-gray);
  text-align: center;
  h1 {
    margin: 2rem 0;
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100vw;
  color: var(--dark-gray);
  @media screen and (min-width: 701px) {
    margin-top: 100px;
  }
  h1 {
    margin: 2rem 0;
  }
`;

export const RecipesContainer = styled(IngredientsContainer)``;

export const RecipeContainer = styled(IngredientsContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    max-width: 1000px;
    max-height: 1000px;
  }
`;

export const IngredientsList = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: min-content;
  overflow: scroll;
  margin-bottom: 100px;
  .accordion {
    width: 100%;
  }
  .accordion__item {
    border-bottom: 1px solid var(--light-gray);
    &:last-child {
      border-bottom: 0;
    }
  }
  .accordion__heading {
    padding: 1rem 0;
    font-size: 1.2rem;
    [aria-expanded="true"] {
      font-weight: bold;
    }
  }
  .accordion__button:focus {
    outline: none;
    &:before {
      outline: none;
    }
  }
  .accordion__panel {
    padding-bottom: 1rem;
  }
`;

export const RecipesList = styled(IngredientsList)`
  max-width: 1000px;
  margin-bottom: 100px;
`;

export const JustifiedRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;