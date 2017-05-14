AccountsTemplates.configure({
  showForgotPasswordLink: false,
  hideSignInLink: true,
  hideSignUpLink: true,
  texts: {
    title: {
      changePwd: "Password Title",
      enrollAccount: "Enroll Title",
      forgotPwd: "Forgot Pwd Title",
      resetPwd: "Reset Pwd Title",
      signIn: "",
      signUp: "",
      verifyEmail: "Verify Email Title",
    },
    inputIcons: {
        isValidating: "fa fa-spinner fa-spin",
        hasSuccess: "fa fa-check",
        hasError: "fa fa-times",
    }
  }
});

AccountsTemplates.addFields([
  {
    _id: 'name',
    type: 'text',
    displayName: 'Your Name',
    placeholder: 'Your full name',
    required: true
  }
])
