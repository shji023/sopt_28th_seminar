const digitalTime = document.querySelector(".digital_time"),
  digitalButton = document.querySelector(".digital_button"),
  bottom = document.querySelector(".bottom"),
  analogHour = document.querySelector(".analog_hour"),
  analogMinute = document.querySelector(".analog_minute"),
  analogSecond = document.querySelector(".analog_second"),
  nums = document.querySelectorAll(".clock_number");

let hour24 = false;

const changeTime = () => {
    if (hour24) {
        hour24 = false;
    } else {
        hour24 = true;
        digitalButton.innerHTML = "24H";
    }
};
  
const fillZero = (num) => {
  // 문자열로 변환
  num = num + "";
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const getTime = () => {
  const now = new Date();
  const dayList = [
    '일', 
    '월', 
    '화', 
    '수', 
    '목', 
    '금', 
    '토'
    ];

  let hour = now.getHours(); // 시간만 let으로 지정
  const minute = now.getMinutes(),
    second = now.getSeconds(),
    year = now.getFullYear(),
    month = now.getMonth()+1, //month+1
    date = now.getDate(),
    day = dayList[now.getDay()];

  if (!hour24) {
    if (hour >= 0 && hour <= 11) {
        if (hour === 0) hour = 12;
        digitalButton.innerHTML = "AM";
    } else {
        if (hour >= 13) hour -= 12;
        digitalButton.innerHTML = "PM";
    }
  }
  return { year, month, date, day, hour, minute, second };
};

const setNumPosition = () => {
    for(let i = 0; i<nums.length; i++){
        if(i+1 === 3 || i+1 === 6 || i+1 === 9 || i+1 === 12) continue;
        const angle = (i+1)*(Math.PI/6);
        const x = 100-nums[i].offsetWidth/2+100*Math.abs(Math.sin(angle).toFixed(2));
        const y = 100-100*Math.abs(Math.cos(angle).toFixed(2));
        if(i+1 > 6) nums[i].style.right = `${x}px`;
        else nums[i].style.left = `${x}px`;
        if((i+1 >= 9 && i+1 <= 12) || ( i+1 >= 1 && i+1 <= 3))
        nums[i].style.top = `${y}px`;
        else nums[i].style.bottom = `${y}px`;
    }
}

const drawClock = (hour, minute, second) => {
    const hourDegree = (hour + minute / 60) * (360 / 12) + 90,
      minuteDegree = (minute + second / 60) * (360 / 60) + 90,
      secondDegree = second * (360 / 60) + 90;
  
    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogSecond.style.transform = `rotate(${secondDegree}deg)`;
  setNumPosition();
};
  
const drawTime = () => {
  const { year, month, date, day, hour, minute, second } = getTime();

  bottom.innerHTML = `${year}년 ${month}월 ${date}일 ${day}요일`;
  digitalTime.innerHTML = `${fillZero(hour)} : ${fillZero(minute)} : ${fillZero(
    second
  )}`;

  drawClock(hour, minute, second);
};

const init = () => {
  setNumPosition();
  setInterval(drawTime, 1000);
  digitalButton.addEventListener("click", changeTime);
};

init();