const timer = (id, deadLine) => {
  const addZero = (num) => {
    if (num >= 0 && num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = (endTime) => {
    const currentDate = new Date();
    const finishDate = new Date(endTime);

    const timeDifference = finishDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return {
      total: timeDifference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const timeDifference = getTimeRemaining(endTime);
      days.textContent = addZero(timeDifference.days);
      hours.textContent = addZero(timeDifference.hours);
      minutes.textContent = addZero(timeDifference.minutes);
      seconds.textContent = addZero(timeDifference.seconds);

      if (timeDifference.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadLine);
};
export default timer;
