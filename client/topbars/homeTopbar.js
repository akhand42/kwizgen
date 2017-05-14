Template.homeTopbar.events({
  'click .logout': function(){
    Meteor.logout()
    location.reload()
  }
})
