'use strict';

class Meetup {
  static SCHEDULE = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    fifth: 29,
    teenth: 13
  }

  static DAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(dayOfWeek, schedule) {
    let startDay =  schedule !== 'last' ? Meetup.SCHEDULE[schedule.toLowerCase()] : (this.endOfMonth() - 6);
    let endDay = Math.min(startDay + 6, this.endOfMonth());
    let targetDay = Meetup.DAYS[dayOfWeek.toLowerCase()];

    for (let day = startDay; day <= endDay; day += 1) {
      let testDate = new Date(this.year, this.month - 1, day);
      if (testDate.getDay() === targetDay) {
        return testDate;
      }
    }

    return null;
  }

  endOfMonth() {
    let date = new Date(this.year, this.month, 0);
    let lastDay = date.getDate();
    return lastDay;
  }

}

module.exports = Meetup;

