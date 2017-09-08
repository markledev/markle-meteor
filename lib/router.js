// import React from 'react';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { mount } from 'react-mounter';
//
// import App from '/imports/ui/containers/App';
// import MainLayout from '/imports/ui/layouts/MainLayout';
// import Dashboard from '/imports/ui/containers/Dashboard/main';
// //add_import_for_new_route
//
// // validation logic
// const checkIfVE = function (ctx, redirect) {
// 	// if (!Meteor.user() && !Meteor.loggingIn()) {
// 	// 	redirect('login');
// 	// }
// }
//
// const redirectIfLoggedIn = function(ctx, redirect) {
// 	if (Meteor.userId() && FlowRouter.getRouteName() !== 'logout') {
// 	  redirect('/dashboard');
// 	}
// }
//
//
// // Set up routes group in the app
// const publicRoutes = FlowRouter.group({
// 	name: 'publicRoutes',
// 	triggersEnter: [
// 		redirectIfLoggedIn
// 	]
// })
//
// const privateRoutes = FlowRouter.group({
//   name: 'privateRoutes',
//   triggersEnter: [
//     checkIfVE
//   ],
// });
//
// // Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     FlowRouter.go('main');
//   },
// });
//
// privateRoutes.route('/main', {
//   name: 'main',
//   action() {
//     mount(App, {
//       main: <MainLayout/>,
//     });
//   },
// });
//
// privateRoutes.route('/dashboard', {
//   name: 'dashboard',
//   action() {
//     mount(MainLayout, {
//       main: <Dashboard/>,
//     });
//   },
// });
//
// //add_new_route
