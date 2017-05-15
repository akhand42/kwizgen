Quizzes = new Mongo.Collection('quizzes');

Quizzes.allow({
insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  // update: function(userId, doc){
  //   return !!userId;
  // },
});

RulesSchema = new SimpleSchema({
  newRule: {
    type: String,
    label: "Enter a rule here"
  }
})

QuestionsSchema = new SimpleSchema({
  newQuestion: {
    type: String,
    label: "Enter your question here"
  },
  questionImage: {
    type: String,
    label: "Paste Question Image URL here",
    optional: true
  },
  newAnswer: {
    type: String,
    label: "Enter the answer here"
  },
  answerImage: {
    type: String,
    label: "Paste Answer Image URL here",
    optional: true
  }
})

QuizzesSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title of the Quiz"
  },
  venue: {
    type: String,
    label: "Venue"
  },
  date: {
    type: Date,
    label: "Date",
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        autoclose: true
      }
    }
  },
  namesOfQM: {
    type: String,
    label: "Quizmaster(s)"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  status: {
    type: String,
    label: "Private/Public",
    autoform: {
      type: "select",
      options: function(){
        return [
          {label: "Private", value: "Private"},
          {label: "Public", value: "Public"},
        ]
      }
    }
  },
  rules: {
    type: [RulesSchema]
  },
  questions: {
    type: [QuestionsSchema]
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Quizzes.attachSchema( QuizzesSchema );
