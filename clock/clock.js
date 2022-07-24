"use strict";

class Clock {

  static MINUTES_PER_DAY = 24 * 60;

  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  toString() {
    return `${this._convertToString(this.hours)}:${this._convertToString(this.minutes)}`;
  }

  add(minutes) {
    let totalMinutes = this._convertTimeToMinutes() + minutes;
    while (totalMinutes >= Clock.MINUTES_PER_DAY) {
      totalMinutes -= Clock.MINUTES_PER_DAY;
    }

    return this._convertMinutesToTime(totalMinutes);
  }

  subtract(minutes) {
    let totalMinutes = this._convertTimeToMinutes() - minutes;
    while (totalMinutes < 0) {
      totalMinutes += Clock.MINUTES_PER_DAY;
    }

    return this._convertMinutesToTime(totalMinutes);
  }

  isEqual(clock) {
    return (this.hours === clock.hours) && (this.minutes === clock.minutes);
  }

  _convertToString(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return String(number);
    }
  }

  _convertTimeToMinutes() {
    let totalMinutes = (this.hours * 60) + this.minutes;
    return totalMinutes % Clock.MINUTES_PER_DAY;
  }

  _convertMinutesToTime(minutes) {
    let hours = Math.floor(minutes / 60);
    if (hours === 24) {
      hours = 0;
    }
    minutes = minutes % 60;
    return new Clock(hours, minutes);
  }
}

module.exports = Clock;
