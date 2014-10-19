function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  
  // behaviors
  self.goToFolder = function (folder) {
    console.log('folder', folder);
    self.chosenFolderId(folder);
  };
};

ko.applyBindings(new WebmailViewModel());
