import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchRecipeAction from "../actions/searchRecipeAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchRecipe = ({ setActiveCuisine }) => {
  setActiveCuisine("");
  const p = useLocation().pathname.split('/')[2];
  const dispatch = useDispatch();
  const [path,setPath] = useState(p)
  useEffect(() => {
    dispatch(SearchRecipeAction(p));
  }, [p]);
  const search = useSelector((state) => state.searchRecipe.search);
  const isLoading = useSelector((state) => state.searchRecipe.isLoading);
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      {!isLoading &&
        search.data.results.map((recipe) => (
          <StyledCard to={`/recipe/${recipe.id}`} key={recipe.id}>
            <img src={`${recipe.image}`} alt="" />
            <h5>{recipe.title}</h5>
          </StyledCard>
        ))}
    </StyledContainer>
  );
};

export default SearchRecipe;

const StyledContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0rem;
`;

const StyledCard = styled(Link)`
  text-decoration: none;
  &:active,
  &:visited {
    color: black;
  }
  h5 {
    text-align: center;
    color: black;
  }

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;
