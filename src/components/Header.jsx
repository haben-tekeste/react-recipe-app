import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cuisineAction from "../actions/cuisineAction";
import { Link } from "react-router-dom";
import NationalCuisineAction from "../actions/nationalCuisineAction";
import { useNavigate } from "react-router-dom";

const Header = ({ setActiveCuisine, activeCuisine }) => {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${textInput}`);
    setTextInput("");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuisineAction());
    dispatch(NationalCuisineAction());
    // eslint-disable-next-line
  }, []);

  return (
    <StyledHeader>
      <Link to={"/"} className="logo">
        <GiKnifeFork />
        <h3>delicious</h3>
      </Link>
      <div className="nav">
        <form action="" onSubmit={submitHandler}>
          <FaSearch />
          <input
            type="text"
            name=""
            id=""
            onChange={textInputHandler}
            value={textInput}
          />
        </form>
        <div className="category">
          <Category
            icon={<FaPizzaSlice />}
            title="Italian"
            setActiveCuisine={setActiveCuisine}
            activeCuisine={activeCuisine}
          />
          <Category
            icon={<FaHamburger />}
            title="American"
            setActiveCuisine={setActiveCuisine}
            activeCuisine={activeCuisine}
          />
          <Category
            icon={<GiNoodles />}
            title="Thai"
            setActiveCuisine={setActiveCuisine}
            activeCuisine={activeCuisine}
          />
          <Category
            icon={<GiChopsticks />}
            title="Japanese"
            setActiveCuisine={setActiveCuisine}
            activeCuisine={activeCuisine}
          />
        </div>
      </div>
    </StyledHeader>
  );
};

const Category = ({ icon, title, setActiveCuisine, activeCuisine }) => {
  return (
    <Link
      className={`cat-item ${title === activeCuisine ? "active" : ""}`}
      to={`/cuisine/${title}`}
      onClick={() => setActiveCuisine(title)}
    >
      {icon}
      <h6>{title}</h6>
    </Link>
  );
};

export default Header;

const StyledHeader = styled.div`
  min-height: 20vh;

  .logo {
    margin: 2rem 0rem 2rem 2rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 8rem;
    &:active,
    &:visited {
      color: black;
    }
    h3 {
      font-size: 1.3rem;
      font-family: "Lobster Two", cursive;
      font-weight: 100;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    form {
      /* border: 2px solid blue; */
      width: 45%;
      display: flex;
      align-items: center;
      position: relative;
      svg {
        position: absolute;
        left: 1rem;
        color: white;
      }
      input {
        width: 100%;
        padding: 0.5rem 3rem;
        font-size: 1.5rem;
        font-family: "Nunito", sans-serif;
        border-radius: 0.8rem;
        color: white;
        outline: none;
        border: none;
        background: linear-gradient(35deg, #444242, #313131);
        &:focus {
          outline: none;
        }
      }
    }
    .category {
      display: flex;
      width: 30%;
      justify-content: space-between;
      .cat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        color: white;
        background: linear-gradient(35deg, #494949, #313131);
        border-radius: 50%;
        cursor: pointer;
        text-decoration: none;
      }
      .active {
        background: linear-gradient(to right, #f27121, #e94057);
      }
    }
  }
`;
