import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Trending = () => {
  const trending = useSelector((state) => state.cuisines.trending);
  const isLoading = useSelector((state) => state.cuisines.isLoading);
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
    >
      <h2>Our Popular Picks</h2>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          arrows: false,
          drag: "free",
          gap: "3rem",
          width: 1300,
        }}
      >
        {!isLoading &&
          trending.data.recipes.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`recipe/${recipe.id}`}>
                <Vegie recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
      </Splide>
    </StyledContainer>
  );
};

const Vegie = ({ recipe }) => {
  return (
    <div className="item">
      <h3>{recipe.title}</h3>
      <img src={`${recipe.image}`} alt="" />
      <Darken />
    </div>
  );
};

export default Trending;

const StyledContainer = styled(motion.div)`
  margin: 3rem auto;
  /* border: 2px solid red; */
  h2 {
    margin: 0.6rem 0rem;
  }
  .item {
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    margin: 1rem 0rem;
    img {
      border-radius: 2rem;
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    h3 {
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: 800;
      text-align: center;
      z-index: 2;
      width: 80%;
    }
  }
`;

const Darken = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
