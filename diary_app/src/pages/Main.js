import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/main/Card";
import Styled from "styled-components";
import NewCard from "../components/main/NewCard";
import { getUserData } from "../lib/api";
import { withRouter } from "react-router-dom";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month, history }) => {
  const [userData, setUserData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getUserData();
      setRawData(data);
      data[year] && setUserData(data[year][month]);
      console.log(data);
    })();
  }, [year, month]);
  /*함수를 실행하려면 async함수 전체를 소괄호로 묶고 뒤에 실행*/

  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return (
            <Card
              key={index}
              props={data}
              onClickFunc={() => history.push(`/diary/${data.id}`)}
            />
          );
        })}
      <NewCard
        rawData={rawData}
        year={year}
        month={month}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      ></NewCard>
    </MainWrap>
  );
};

export default withRouter(Main);
