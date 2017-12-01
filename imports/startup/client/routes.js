import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import MinorLayout from '/imports/ui/layouts/MinorLayout';

import IntroPage from '/imports/ui/containers/IntroPage/main';

import Checkout from '/imports/ui/containers/Checkout/main';

import MultiLogin from '/imports/ui/containers/MultiLogin/main';

// add_import_for_new_route






// validation logic
const checkIfVE = function (ctx, redirect) {
	if (!Meteor.user() && !Meteor.loggingIn()) {
		redirect('login');
	}
};

const redirectIfLoggedIn = function (ctx, redirect) {
	if (Meteor.userId() && FlowRouter.getRouteName() !== 'logout') {
		redirect('introPage');
	}
};

// Set up routes group in the app
const publicRoutes = FlowRouter.group({
	name: 'publicRoutes',
	triggersEnter: [
		// redirectIfLoggedIn
	]
});

const privateRoutes = FlowRouter.group({
  name: 'privateRoutes',
  triggersEnter: [
    // checkIfVE
  ]
});

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action () {
    FlowRouter.go('introPage');
  }
});

privateRoutes.route('/IntroPage', {
  name: 'introPage',
  action() {
    mount(MainLayout, {
      main: <IntroPage/>,
    });
  },
});

privateRoutes.route('/Checkout', {
  name: 'checkout',
  action() {
    mount(MainLayout, {
      main: <Checkout/>,
    });
  },
});

publicRoutes.route('/MultiLogin', {
  name: 'multiLogin',
  action() {
    mount(MainLayout, {
      main: <MultiLogin/>,
    });
  },
});

// add_new_route



