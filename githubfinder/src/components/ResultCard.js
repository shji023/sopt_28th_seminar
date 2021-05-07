import React from "react";
import Styled from 'styled-components';

const ResultCardWrap = Styled.div`
    img {
        width:200ox;
        height:200px;
        margin:auto 50px;
    }
    .result_card
    {
        width: 600px;
        height: 350px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: black;
        background-color: white;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
    .result_profile
    {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .result_list
    {
        display: flex;
        flex-direction: row;
    }
    .result_following
    {
        margin-left: 10px
    }
`;

const ResultCard = ({data}) => {
    return data &&(  
    <ResultCardWrap>
        <div className = "result_card">
            <div className = "result_profile">
              <img src = {data.avatar_url} alt = ""/>
              <p className = "result_name"> {data.name}</p>
            </div>
            <div className = "result_desc">
              <p className = "result_bio">Bio : {data.bio}</p>
              <p className = "result_repos">Repositories : {data.public_repos}</p>
              <div className = "result_list">
                <p className = "result_followers">Followers: {data.followers}</p>
                <p className = "result_following">Following : {data.following}</p>
              </div>
              <p className = "result_location">Location : {data.location}</p>
            </div>
        </div>
    </ResultCardWrap>
    );
};
export default ResultCard;