import Main from './pages/Main';
import Diary from './pages/Diary';
import MainHeader from './components/common/MainHeader'
import Calendar from './components/common/Calendar'
import Title from './components/common/Title'
import Footer from './components/common/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  getUserData from './lib/api';

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  {/*한꺼번에 리턴하기 위해선 객체로 리턴*/}
  return {year:currYear, month: currMonth};
}

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);
  const [userData, setUserData] = useState(null);
 
  useEffect(()=>{
    (async()=>{
      const data = await getUserData();
      data[year]&&setUserData(data[year][month]);
      console.log(data);
    })();
  },[year, month]);
{/*함수를 실행하려면 async함수 전체를 소괄호로 묶고 뒤에 실행*/}
  return (
    <>
    <BrowserRouter>
    <MainHeader></MainHeader>
    <Calendar 
      currYear={year} 
      setCurrYear={setYear} 
      currMonth={month} 
      setCurrMonth={setMonth}>
    </Calendar>
    <Title></Title>
      <Switch>
      <Route exact path="/" component={()=>{return <Main props={userData}/>}} />
      {/*다이어리를 가져올 때 주소가 아이디마다 달라지기에*/}
      <Route exact path="/diary/:id" component={Diary} />
      {/*주소를 잘못 입력했을경우*/}
      <Route component={()=> <div>Page Not Found</div>} />
      {/*<Switch> 는 첫번째로 매칭되는 path를 가진 컴포넌트를 렌더링*/}
      {/*path 값이 없는 라우트 무분별 렌더링 막아줌*/}
      </Switch>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
