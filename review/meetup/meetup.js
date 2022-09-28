'use strict';

class Meetup {
  static days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  static intervals = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    fifth: 29,
    teenth: 13,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
  }

  day(dayOfWeek, interval) {
    let targetDayIndex = Meetup.days.indexOf(dayOfWeek.toLowerCase());

    let firstDay = this._firstDayToTest(interval);
    let lastDay = Math.min(firstDay + 6, this.daysInMonth);

    for (let day = firstDay; day <= lastDay; day += 1) {
      let date = new Date(this.year, this.month - 1, day);
      if (date.getDay() === targetDayIndex) {
        return date;
      }
    }

    return null;
  }

  _firstDayToTest(interval) {
    if (Meetup.intervals[interval.toLowerCase()]) {
      return Meetup.intervals[interval.toLowerCase()];
    } else {
      return this.daysInMonth - 6;
    }
  }
}

module.exports = Meetup;
