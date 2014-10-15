function AppViewModel() {
  this.firstName = "first";
  this.lastName = "last";
}

// activate knockout.js
ko.applyBindings(new AppViewModel());
