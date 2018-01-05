class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = new Date(this.date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }


}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    console.log(this.beginningLocation.horizontal)

    const horizontal = Math.abs((eastWest.indexOf(this.beginningLocation.horizontal) + 1) - (eastWest.indexOf(this.endingLocation.horizontal) + 1))
    const vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return horizontal + vertical
  }


}
