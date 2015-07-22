Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {zubmitted: -1}});
  }
});
