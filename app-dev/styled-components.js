import styled from 'styled-components';

// header components
export const HeadContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const AppTitle = styled.h1`
  border: 2px solid black;
  color: red;
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
  border: 2px inset;
  margin: auto;
`;

export const Meals = styled.div`
align-items: center;
  display: flex;
`;

export const Button = styled.button`
  border: 1px solid black;
  background: white;
  display: block;
  margin: 10px auto;

  &:active{
    transform: translateY(4px);
  }
`;

export const SectionHeader = styled.h3`

`;

export const Meal = styled.div`
  margin: auto;
`;

export const MealImg = styled.img`
`;


export const RecipeDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RecipeCard = styled.div`
  flex: 1 0 20%;
`;

export const RecipeImg = styled.img`
  max-width: 10vw;
`;

export const RecipeTitle = styled.h5`
  margin: 6px 0px;
`;

export const LoginContainer = styled.div`
`;
