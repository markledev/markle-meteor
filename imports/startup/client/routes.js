import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import MinorLayout from '/imports/ui/layouts/MinorLayout';
import SampleContainer from '/imports/ui/containers/SampleContainer/main';

import PublicContainer from '/imports/ui/containers/PublicContainer/main';

import LogIn from '/imports/ui/containers/LogIn/main';

import ResetPassword from '/imports/ui/containers/ResetPassword/main';

import RegisterAccount from '/imports/ui/containers/RegisterAccount/main';

import LogOut from '/imports/ui/containers/LogOut/main';

//add_import_for_new_route





// validation logic
const checkIfVE = function (ctx, redirect) {
	// if (!Meteor.user() && !Meteor.loggingIn()) {
	// 	redirect('login');
	// }
}

const redirectIfLoggedIn = function(ctx, redirect) {
	if (Meteor.userId() && FlowRouter.getRouteName() !== 'logout') {
	  redirect('/dashboard');
	}
}


// Set up routes group in the app
const publicRoutes = FlowRouter.group({
	name: 'publicRoutes',
	triggersEnter: [
		redirectIfLoggedIn
	]
})

const privateRoutes = FlowRouter.group({
  name: 'privateRoutes',
  triggersEnter: [
    checkIfVE
  ],
});

// // Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     FlowRouter.go('SampleContainer');
//   },
// });


privateRoutes.route('/SampleContainer', {
  name: 'sampleContainer',
  action() {
    mount(MainLayout, {
      main: <SampleContainer/>,
    });
  },
});

publicRoutes.route('/PublicContainer', {
  name: 'publicContainer',
  action() {
    mount(MinorLayout, {
      main: <PublicContainer/>,
    });
  },
});


publicRoutes.route('/LogIn', {
  name: 'logIn',
  action() {
    mount(MinorLayout, {
      main: <LogIn/>,
    });
  },
});

publicRoutes.route('/ResetPassword', {
  name: 'resetPassword',
  action() {
    mount(MinorLayout, {
      main: <ResetPassword/>,
    });
  },
});

publicRoutes.route('/RegisterAccount', {
  name: 'registerAccount',
  action() {
    mount(MinorLayout, {
      main: <RegisterAccount/>,
    });
  },
});

publicRoutes.route('/LogOut', {
  name: 'logOut',
  action() {
    mount(MinorLayout, {
      main: <LogOut/>,
    });
  },
});

//add_new_route



