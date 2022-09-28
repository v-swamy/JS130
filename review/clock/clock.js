'use strict';

class Clock {

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }

  toString() {
    let hourString = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    let minString = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    return `${hourString}:${minString}`;
  }

  add(minutes) {
    let totalMinutes = this.calcTotalMinutes() + minutes;
    this.setTime(totalMinutes);
    return this;
  }

  subtract(minutes) {
    return this.add(-(minutes));
  }

  calcTotalMinutes() {
    return (60 * this.hours) + this.minutes;
  }

  isEqual(clock2) {
    return (this.hours === clock2.hours) && (this.minutes === clock2.minutes);
  }

  setTime(totalMinutes) {
    const MINUTES_PER_DAY = 1440;

    let minutesAfterMidnight = totalMinutes % MINUTES_PER_DAY;

    if (minutesAfterMidnight < 0) {
      minutesAfterMidnight = 1440 + minutesAfterMidnight;
    }

    this.minutes = minutesAfterMidnight % 60;
    this.hours = (minutesAfterMidnight - this.minutes) / 60;
  }
}

module.exports = Clock;
