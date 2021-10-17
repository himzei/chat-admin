import React from "react";
import "moment/locale/ko";
import Moment from "moment";

function ArraysDays({ startDate, endDate, lecDate, lecHold }) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  let dates = [];
  //to avoid modifying the original date
  let theDate = new Date(startDate);

  for (let i = 0; i <= diffDays; i++) {
    // dates.push(Moment(theDate).format("ddddd").slice(0, 1));
    dates.push(Moment(theDate).format("dddd").slice(0, 1));
    theDate.setDate(theDate.getDate() + 1);
  }

  let counts = 0;

  for (let i = 0; i < dates.length; i++) {
    for (let j = 0; j < lecDate.length; j++) {
      if (dates[i] === lecDate[j]) {
        counts = counts + 1;
      }
    }
  }

  return <div>{counts - lecHold}</div>;
}

export default ArraysDays;
