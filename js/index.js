function AppViewModel() {
  this.firstName = ko.observable("first");
  this.lastName = ko.observable("last");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);
}

// activate knockout.js
ko.applyBindings(new AppViewModel());
