function AppViewModel() {
  this.firstName = ko.observable("first");
  this.lastName = ko.observable("last");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);

  this.capLastName = function () {
    var curr = this.lastName();
    this.lastName(curr.toUpperCase());
  };
}

// activate knockout.js
ko.applyBindings(new AppViewModel());
