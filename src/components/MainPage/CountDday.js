import React from "react";

function CountDday(props) {
  const today = new Date();
  const dday = new Date(props.dday);
  const gap = dday.getTime() - today.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  return <div>종료일까지 {result}일</div>;
}

export default CountDday;
