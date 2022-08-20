import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NationalCuisine = () => {
  const p = useLocation().pathname.split("/")[2];
  const italianCuisine = useSelector((state) => state.nationalCuisine.italian);
  const americanCuisine = useSelector(
    (state) => state.nationalCuisine.american
  );
  const thaiCuisine = useSelector((state) => state.nationalCuisine.thai);
  const japaneseCuisine = useSelector(
    (state) => state.nationalCuisine.japanese
  );
  const isLoading = useSelector((state) => state.nationalCuisine.isLoading);
  const cuisine =
    p === "Italian"
      ? italianCuisine
      : p === "American"
      ? americanCuisine
      : p === "Thai"
      ? thaiCuisine
      : japaneseCuisine;
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      {!isLoading &&
        cuisine &&
        cuisine.data.recipes.map((recipe) => (
          <StyledCard to={`/recipe/${recipe.id}`}>
            <img src={`${recipe.image}`} alt="" />
            <h5>{recipe.title}</h5>
          </StyledCard>
        ))}
    </StyledContainer>
  );
};

export default NationalCuisine;

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
