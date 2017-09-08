SSR.compileTemplate('accountsEmailTemplate', Assets.getText(
  'emails/enrollUser.html')); //!TODO change the template

Accounts.emailTemplates.from = 'Otonomos <support@otonomos.com>';
Accounts.emailTemplates.siteName = 'Otonomos';

//Reset Password email
Accounts.emailTemplates.resetPassword.html = function(user, url) {

  url = url.replace('#/', 'passwordRecovery/#/');

  var data = {
    btn_url: url
  };

  SSR.compileTemplate('body', Assets.getText('emails/passwordRecovery.html'));
  var body = SSR.render('body', data);

  // Refactor out this logic so that we can cater for multiple VE's
  // SSR.compileTemplate('emailTemplate', Assets.getText('emails/emailTemplate.html'));
  // var template = SSR.render('emailTemplate');
  // return template.replace('%%content%%', body);
  var html = getEmailHTML(body);
  return html;
};

Accounts.emailTemplates.resetPassword.subject = function(user) {
  return 'Reset your password';
};

//Send Enrollment email
Accounts.emailTemplates.enrollAccount.html = function(user, url) {

  console.log('global var companyId', globalVar);
  console.log('user, url, ', user, url);

  var companyId = globalVar;

  url = url.replace('#/', '');

  var referral = false;
  if (((user || {}).referral || {}).message) {
    referral = user.referral.message;
  }

  var inviteFrom = false;
  if (((user || {}).referral || {}).by) {
    if (user.referral.by) {
      inviteFrom = formatUsername(user.referral.by);
    }
  }

  //console.log('accountsEmailTemplate user variable:', user);

  var companyName = "";
  if (companyId) {
    var company = Companies.findOne(companyId, {
      fields: {
        name: 1
      }
    });
    var verificationEntity = VerificationEntities.findOne(companyId, {
      fields: {
        name: 1
      }
    });

    if (company) companyName = company.name
    else companyName = verificationEntity.name;
  }

  //Determine in user is an investor
  var investor = Roles.userIsInRole(user._id, ['investor'], companyId);
  console.log(
    'accountsEmailTemplate - checking if user is an investor id, company, result',
    user._id, companyId, investor);

  var firstName = ((user || {}).profile || {}).firstName;

  var data = {
    companyName: companyName,
    btn_url: url,
    referral: referral,
    inviteFrom: inviteFrom,
    investor: investor,
    role: user.latestInvite.role,
    roleFormatted: formatUserRole(user.latestInvite.role),
    firstName: firstName
  };

  SSR.compileTemplate('body', Assets.getText('emails/enrollUser.html'));
  var body = SSR.render('body', data);

  // Refactor out this logic so that we can cater for multiple VE's
  // SSR.compileTemplate('emailTemplate', Assets.getText('emails/emailTemplate.html'));
  // var template = SSR.render('emailTemplate');
  // return template.replace('%%content%%', body);
  var html = getEmailHTML(body);
  return html;
};

// TODO: Should fix this at some point
// Accounts.emailTemplates.enrollAccount.text = function(user, url) {
//   // Currently what we see in mailgun.
//   return `Hello,
//
//   To start using the service, simply click the link below.
//
//   https://dashboard.otonomos.com/#/enroll-account/z-83ZurjZ3mGA51JCdR-D_MEqqD3HihlIjdQg1rzw7N
//
//   Thanks.`;
// };

Accounts.emailTemplates.enrollAccount.subject = function(user) {

  // console.log(user);

  var role = ((user || {}).latestInvite || {}).role;

  if (role === 'admin') {
    return 'Invite to become a director / shareholder';
  }

  if (role === 'adminNoWallet') {
    return 'Invite to become a director';
  }

  if (role === 'user') {
    return 'Invite to become a shareholder';
  }

  if (role === 'investor') {
    return 'Invite to become an investor';
  }

  if (role === 'otonomos') {
    return 'Invite to become an Otonomos administrator';
  }

  if (role === 'VEA') {
    return 'Invite to become a Verification Agent';
  }

  return 'Invite for your company\'s dashboard';
};
