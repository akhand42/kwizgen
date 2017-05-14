Meteor.users.deny({
  update() {return true;}
});

var postSignUp = function(userId, info){
  Roles.addUsersToRoles(userId, [info.profile.accountType]);
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
