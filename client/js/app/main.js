angular.module('loginApp', []);
angular
  .module('loginApp')
  .controller('SignUpController', SignUpController);
SignUpController.$inject = ['$http'];

function SignUpController($http) {
  this.newUser = {};
}
