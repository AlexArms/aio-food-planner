import styled from 'styled-components';

// header components
export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppTitle = styled.h1`
  color: red;
  border: 2px solid black;
  margin: 2px 50px;
  padding: 6px;
  width: fit-content;
`;

export const Slogan = styled.span`
  color: red;
`;

export const SearchBar = styled.input`
`;

export const MealSearch = styled.div`
border: 1px solid black;
height: fit-content;
margin: auto;
padding: 10px;
width: 40vh;
`;

export const SearchInfo = styled.p`

`;

export const IngredientInput = styled.input`
  margin: auto;
`;

export const Meals = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid black;
  background: white;
  margin: 10px auto;
  display: block;

  &:active{
    transform: translateY(4px);
  }
`;

export const MealsHeader = styled.h3`

`;

export const Meal = styled.div`
  margin: auto;
`;

export const MealImg = styled.img`
`;

export const MealName = styled.h6`
  color: green;
`;

export const ResultsDisplay = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Result = styled.div`
flex: 1 0 20%;
`;

export const RecipeImg = styled.img`
  max-width: 10vw;
`;

export const RecipeTitle = styled.h6`
`;
