Template.gridView.onCreated(function(){
  this.autorun(() =>  {
    this.subscribe('quizQuestions',FlowRouter.getParam('id'));
  })
})

Template.gridView.helpers({
  allQuestions: function(){
    var quest = Quizzes.find().fetch();
    if(quest.length != 0){
      return quest[0].questions
    }
  },
  quizId: function(){
    return FlowRouter.getParam('id')
  }
})

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
