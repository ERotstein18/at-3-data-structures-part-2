enum Days {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
  }
function myDay(scheduled: Days): void {
    scheduled <= 5 ? console.log("weekday") : console.log("weekend")
}

myDay(Days.Monday); // Output: weekday
myDay(Days.Saturday); // Output: weekend