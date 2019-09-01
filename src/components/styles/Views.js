import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #FFFAFF;
  color: #1E1B18;
  text-align: center;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100vw;
  background-color: #FFFAFF;
  color: #1E1B18;
  padding-top: 100px;
`;

export const RecipesContainer = styled(IngredientsContainer)``;

export const IngredientsList = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .accordion {
    width: 100%;
  }
  .accordion__item {
    border-bottom: 1px solid #1E1B18;
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
  .accordion__panel {
    padding-bottom: 1rem;
  }
`;

export const RecipesList = styled(IngredientsList)``;

export const JustifiedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;