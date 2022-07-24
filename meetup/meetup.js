"use strict";

class Meetup {
  static DAY_INDEX = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  }

  static SCHEDULE_INDEX = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
  }

  static TEENTHS = [13, 14, 15, 16, 17, 18, 19]

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.monthIndex = month - 1;
  }

  day(weekday, schedule) {
    let dayIndex = Meetup.DAY_INDEX[weekday.toLowerCase()];
    schedule = schedule.toLowerCase();

    switch (schedule) {
      case 'first':
      case 'second':
      case 'third':
      case 'fourth':
      case 'fifth':
        return this._computeDate(dayIndex, schedule);
      case 'last':
        return this._computeLastDate(dayIndex);
      case 'teenth':
        return this._computeTeenthDate(dayIndex);
    }
    return undefined;
  }

  _computeDate(dayIndex, schedule) {
    let dayCounter = 1;
    let scheduleTarget = Meetup.SCHEDULE_INDEX[schedule];
    let testDate = new Date(this.year, this.monthIndex, dayCounter);
    let resultDate = null;

    while (testDate.getMonth() === this.monthIndex) {
      if (testDate.getDay() === dayIndex) {
        scheduleTarget -= 1;
      }

      if (!scheduleTarget) {
        resultDate = new Date(testDate);
        break;
      }

      dayCounter += 1;
      testDate.setDate(dayCounter);
    }

    return resultDate;
  }

  _computeLastDate(dayIndex) {
    let dayCounter = 1;
    let testDate = new Date(this.year, this.monthIndex, dayCounter);
    let resultDate = null;

    while (testDate.getMonth() === this.monthIndex) {
      if (testDate.getDay() === dayIndex) {
        resultDate = new Date(testDate);
      }

      dayCounter += 1;
      testDate.setDate(dayCounter);
    }

    return resultDate;
  }

  _computeTeenthDate(dayIndex) {
    let resultDate = null;

    Meetup.TEENTHS.forEach(day => {
      let testDate = new Date(this.year, this.monthIndex, day);
      if (testDate.getDay() === dayIndex) {
        resultDate = new Date(testDate);
      }
    });

    return resultDate;
  }
}

module.exports = Meetup;