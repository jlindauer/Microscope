Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    console.log(a.href);
    return a.hostname;
  }
});
