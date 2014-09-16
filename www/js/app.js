funcs = {
  onSuccess: function (contacts) {
    alert('Found ' + contacts.length + ' contacts.');
  },

  onError: function (contactError) {
    alert('onError!');
  }
}