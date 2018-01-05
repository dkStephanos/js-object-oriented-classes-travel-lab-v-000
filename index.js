class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = new Date(this.date);
  }

  yearsExperienceFromBeginningOf(year) {
    return this.startDate.getFullYear() - year
  }


}
