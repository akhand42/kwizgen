Meteor.methods({
  'publishQuiz': function(quizId){
    check(quizId, String);
    Quizzes.update({_id: quizId}, {$set:{status: 'Public'}})
  },
  'deleteQuiz': function(quizId){
    check(quizId, String);
    Quizzes.remove({_id: quizId})
  }
})
