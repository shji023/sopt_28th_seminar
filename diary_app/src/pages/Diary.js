import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getUserData } from "../lib/api";
import Card from "../components/diary/Card";

const Diary = ({ year, month, match }) => {
  const id = match.params.id;
  const [diaryData, setDiaryData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getUserData();
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id)));
      console.log(diaryData);
    })();
  }, [id]);
  //계속 그 페이지에 머물러 있다면 다시 호출할 필요가 없기에 아이디로
  return diaryData && <Card data={diaryData} />;
};

export default withRouter(Diary);
