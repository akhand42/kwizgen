Meteor.publish('allQuizzes', function(){
  return Quizzes.find({author: this.userId},{fields:{'title':1,'status':1, 'venue':1, 'date':1}});
});


Meteor.publish('pubQuizzes', function(){
  return Quizzes.find({status: 'Public'},{fields:{'title':1, 'venue':1, 'date':1, 'author':1}});
});

Meteor.publish('quizAuthor', function(){
  return Meteor.users.find({_id: this.author},{fields:{'profile.name':1}})
})

Meteor.publish('quiz',(id) => {
  check(id,String); // be sure to check the parameter(s) to your publication
    return Quizzes.find({_id: id}, {fields:{'title':1, 'venue':1, 'namesOfQM':1, 'date':1, 'rules':1}});
});

Meteor.publish('quizQuestions',(id) => {
  check(id,String); // be sure to check the parameter(s) to your publication
    return Quizzes.find({_id: id}, {fields: {'questions':1}});
});
