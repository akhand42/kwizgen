Template.yourQuizzes.onCreated(function(){
  this.autorun(() => {
    this.subscribe('allQuizzes')
  })
})

Template.yourQuizzes.helpers({
  allQuizzes: function(){
    var quizzes = Quizzes.find().fetch();
    return quizzes
  },
  dateOfQuiz: function(){
    return moment(this.date).format('dddd, Do MMMM YYYY')
  },
  isPublished: function(){
    if(this.status === 'Public'){
      return true
    }
    else{
      return false
    }
  }
})

Template.yourQuizzes.events({
  'click .publish': function(){
    Meteor.call('publishQuiz', this._id)
  },
  'click .delete-quiz': function(){
    Meteor.call('deleteQuiz', this._id)
  }
})

// Template.homePageLayout.onCreated(function(){
//   this.autorun(() => {
//     this.subscribe('studentHomePageCount')
//     this.subscribe('parentHomePageCount')
//     this.subscribe('mentorHomePageCount')
//   });
// });
