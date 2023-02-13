const getDateByString = (args: string) => {
  // Parameter
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const weekend = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfTheWeek = weekend[today.getDay() - 1];
  const newday = new Date().toISOString().split("T")[0];
  const time = today.toString().split(" ")[4];

  if (args === "month") {
    return month;
  } else if (args === "date") {
    return date;
  } else if (args === "week") {
    return dayOfTheWeek;
  } else if (args === "newday") {
    return newday;
  } else if (args === "time") {
    return time;
  } else {
    return "Bad Request";
  }
  // switch (args) {
  //   case "month":
  //     month;
  //     break;
  //   case "date":
  //     date;
  //     break;
  //   case "week":
  //     dayOfTheWeek;
  //   default:
  //     break;
  // }
};

export { getDateByString };
