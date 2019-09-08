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
  align-items: flex-start;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  p, div { margin-bottom: 1rem; }
`;

export const RecipeHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.4)),
    url('${props => props.bgImage ? props.bgImage : 'none'}');
  background-size: cover;
  background-position: center;
  min-height: ${props => props.bgImage ? '400px' : '200px'};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    display: inline;
    background-color: var(--yellow);
    box-decoration-break: clone;
    font-size: 3em;
    padding: 0.2em;
    line-height: 1.8em;
    color: black;
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

// new

export const JustifiedRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlignedRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

// ingredients

export const StyledIngredientsMain = styled.main`
  width: calc(100% - var(--nav-width));
  margin: 0 0 0 var(--nav-width);
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  color: var(--dark-gray);
  ul {
    list-style-type: none;
    margin: 0;
  }
  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

export const StyledCurrentIngredientsSection = styled.section`
  padding: 4rem;
  h2 {
    margin: 1rem 0;
  }
  img {
    max-width: 100%;
  }
`;

export const StyledQuickAddIngredientsSection = styled.section`
  padding: 4rem;
  background-image: linear-gradient(white, var(--light-blue));
`;

export const StyledIngredientListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--light-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ingredient__label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .ingredient__measurement {
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  &:last-child {
    border-bottom: none;
  }
`;

// recipes

export const StyledRecipesMain = styled(StyledIngredientsMain)`
  grid-template-columns: 1fr;
`;

export const StyledRecipesSection = styled(StyledCurrentIngredientsSection)``;