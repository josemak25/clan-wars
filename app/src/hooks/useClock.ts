import dayjs from "dayjs";
import { useCallback, useState } from "react";

import { useInterval } from "./useInterval";

const INTERVAL_IN_MS = 1000;

export const useClock = (date: dayjs.Dayjs) => {
  const [time, setTime] = useState("00");
  const [countdownTimer, setCountdownTimer] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  /**
   * Note: used to control the useInterval
   * running: If true, the interval is running
   * true: Should set running true to trigger interval
   * false: Should set running false to remove interval
   */
  const [isClockRunning, setIsClockRunning] = useState(true);

  const clockCallback = useCallback(() => {
    const distance = dayjs(date).unix() - dayjs().unix();
    const continueRunning = distance >= 0;

    if (!continueRunning && isClockRunning) {
      return setIsClockRunning(false);
    }

    let seconds = Math.floor(distance % 60).toString();
    let days = Math.floor(distance / (60 * 60 * 24)).toString();
    let minutes = Math.floor((distance % (60 * 60)) / 60).toString();
    let hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60)).toString();

    if (+seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (+minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (+hours < 10) {
      hours = `0${hours}`;
    }

    if (+days < 10) {
      days = `0${days}`;
    }

    const time = `${days} : ${hours} : ${minutes} : ${seconds}`
      .split("00 : ")
      .join("")
      .trim();

    setTime(time);
    setCountdownTimer({ seconds, days, minutes, hours });
  }, []);

  useInterval(clockCallback, isClockRunning ? INTERVAL_IN_MS : null);

  return { time, isClockRunning, ...countdownTimer };
};
