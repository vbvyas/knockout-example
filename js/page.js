function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  
  // behaviors
  self.goToFolder = function (folder) {
    self.chosenFolderId(folder);
    $.ajax({
      url: 'http://learn.knockoutjs.com/mail?folder=' + folder,
      type: 'GET',
      dataType: 'jsonp',
      crossDomain: true,
    })
    .done(function (data) {
      self.chosenFolderData(data);
    });
  };

  // show inbox by default
  self.goToFolder('Inbox');
};

ko.applyBindings(new WebmailViewModel());
