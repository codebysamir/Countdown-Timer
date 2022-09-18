const countdown = () => {
  const date = new Date();

  let monthNow = date.getMonth() + 1;
  let daysNow = date.getDate();
  let hoursNow = date.getHours();
  let minutesNow = date.getMinutes();
  let secondsNow = date.getSeconds();

  let monthDiff = Math.round(12 - monthNow);
  let daysDiff = Math.round(31 - daysNow);
  let hoursDiff = Math.round(24 - hoursNow);
  let minutesDiff = Math.round(60 - minutesNow);
  let secondsDiff = Math.round(60 - secondsNow);

  document.getElementById('month').innerHTML = monthDiff;
  document.getElementById('days').innerHTML = daysDiff;
  document.getElementById('hours').innerHTML = hoursDiff;
  document.getElementById('minutes').innerHTML = minutesDiff;
  document.getElementById('seconds').innerHTML = secondsDiff;
}

let timer = setInterval(countdown, 1000);
