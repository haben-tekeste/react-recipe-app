import { useEffect } from "react";
import cuisineDetailsAction from "../actions/cuisineDetailsAction";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const CuisineDetails = ({ setActiveCuisine }) => {
  const path = useLocation();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    const p = path.pathname.split("/")[2];
    dispatch(cuisineDetailsAction(p));
    setActiveCuisine("");
  });
  const details = useSelector((state) => state.activeCuisine.cuisine.data);
  const isLoading = useSelector((state) => state.activeCuisine.isLoading);
  return (
    <div>
      {!isLoading && (
        <StyledRecipe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
        >
          <div className="title">
            <h2>{details.title}</h2>
            <img src={`${details.image}`} alt="" />
          </div>
          <div className="info">
            <button
              onClick={() => setActiveTab("instructions")}
              className={activeTab === "instructions" ? "active" : ""}
            >
              Instructions
            </button>
            <button
              onClick={() => setActiveTab("ingredients")}
              className={activeTab === "ingredients" ? "active" : ""}
            >
              Ingredients
            </button>
            <div>
              {activeTab === "instructions" ? (
                <StyledInstructions>
                  <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                </StyledInstructions>
              ) : (
                <StyledIngredients>
                  <ul>
                    {details.extendedIngredients.map((ingredient) => (
                      <li>{ingredient.original}</li>
                    ))}
                  </ul>
                </StyledIngredients>
              )}
            </div>
          </div>
        </StyledRecipe>
      )}
    </div>
  );
};

export default CuisineDetails;

const StyledRecipe = styled(motion.div)`
  margin: 6rem 0rem;
  display: flex;
  justify-content: space-around;
  .info {
    width: 40%;
    .active {
      background: linear-gradient(35deg, #444242, #313131);
      color: white;
    }
    button {
      padding: 0.8rem 2rem;
      margin-right: 2rem;
      margin-bottom: 1rem;
      outline: none;
      background: none;
      border: 2px solid black;
      cursor: pointer;
    }
  }
  .title {
    width: 35%;
    h2 {
      margin-bottom: 1rem;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

const StyledInstructions = styled.div`
  font-family: "Nunito", sans-serif;
  p {
    margin: 1rem 0rem;
    text-align: justify;
    font-size: 1.2rem;
    font-weight: 500;
  }
  div ol li {
    font-size: 1rem;
  }
`;

const StyledIngredients = styled.div`
  ul li {
    padding: 0.3rem 0rem;
  }
`;
