// class to represent a seat row
function SeatReservation(name, initialMeal) {
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
}

function ReservationsViewModel() {
  var self = this;

  // non-editable data
  self.availableMeals = [
    { mealName: "Standard (sandwich)", price: 0 },
    { mealName: "Premium (lobster)", price: 34.95 },
    { mealName: "Ultimate (zebra)", price: 290 }
  ];

  // editable data
  self.seats = ko.observableArray([
    new SeatReservation("Steve", self.availableMeals[0]),
    new SeatReservation("Bert", self.availableMeals[0])
  ]);
}

ko.applyBindings(new ReservationsViewModel());
