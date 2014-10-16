function AppViewModel() {
  this.firstName = ko.observable("first");
  this.lastName = ko.observable("last");
}

// activate knockout.js
ko.applyBindings(new AppViewModel());
