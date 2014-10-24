function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  
  // behaviors
  self.goToFolder = function (folder) {
    self.chosenFolderId(folder);
    var url = 'http://learn.knockoutjs.com/mail?folder=' + folder + '&callback=?';
    $.ajax({
      url: url,
      dataType: 'jsonp',
      timeout: 10000,
      success: self.chosenFolderData
    });
  };

  // show inbox by default
  self.goToFolder('Inbox');
};

ko.applyBindings(new WebmailViewModel());
