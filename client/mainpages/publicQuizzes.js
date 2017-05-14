Template.publicQuizzes.onCreated(function(){
  this.autorun(() => {
    this.subscribe('pubQuizzes')
    this.subscribe('quizAuthor')
  })
})

Template.publicQuizzes.helpers({
  allQuizzes: function(){
    var quizzes = Quizzes.find().fetch();
    return quizzes
  },
  dateOfQuiz: function(){
    return moment(this.date).format('dddd, Do MMMM YYYY')
  },
  authorOfQuiz: function(){
     return Meteor.users.findOne({_id:this.author}).profile.name
  }
})

// Template.homePageLayout.onCreated(function(){
//   this.autorun(() => {
//     this.subscribe('studentHomePageCount')
//     this.subscribe('parentHomePageCount')
//     this.subscribe('mentorHomePageCount')
//   });
// });
