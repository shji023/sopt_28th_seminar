import React from "react";
import Styled from 'styled-components';

const SearchBarWrap = Styled.div`
  h1
  {
    margin-left:200px
  }
  input 
  {
    width: 400px;
    color: gray;
    font-size: 1em;
    border: 4px solid gray;
    border-radius: 3px;
    padding: 10px;
    margin: 20px 100px
  }
  input::placeholder 
  {
    color: gray;
  }
  input:focus 
  {
    outline: none;
  }
`;

const SearchBar = ({getUser}) => {
    const [userName, setUserName] = React.useState("");

    const changeHandler = (event) => {
        setUserName(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        getUser(userName);
        setUserName("");
    }
    return(
        <SearchBarWrap>
            <h1>GitHub Finder</h1>
            <form onSubmit = {submitHandler}>
            <input type = "text" value={userName} onChange={changeHandler} 
            placeholder = "GitHub ID를 입력해주세요"></input>
            </form>
        </SearchBarWrap>
        
    );
};
export default SearchBar;