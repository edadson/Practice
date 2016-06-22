angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,AppConfig) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.churchName = AppConfig.churchName();
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('WordOfDayCtrl', function($scope, $ionicPopup, $stateParams) {

  var items = [

      {'Date':'June 11','Title':'The Virtuos woman','id':'1'},
      {'Date':'June 12','Title':'The Ten commandments','id':'2'},
      {'Date':'June 13','Title':'Be fruitful and multiply','id':'3'}
  ];

    $scope.WOD = items;
})
.controller('WODDetailsCtrl', function($scope,$ionicHistory,$stateParams,WODFactory) {
var id = Number(WODFactory.getQueryParam("id"));
$scope.details = WODFactory.getWodItem(id);
//console.log(data.id);

})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.factory('AppConfig', function(){
var churchConfig = {
'name':'Action Chapel International'

}

return{
  churchName:function(){

    return churchConfig.name;
  }
}
})
.factory('WODFactory', function(){


  var wodItems = [{'id':1,'title':'The Good Fight','text':'this is a sample text test 123... <i>Some more stuff</i>'},
  {'id':2,'title':'The children of today','text':'this is a sample text test 123... <i>Some more stuff</i>'}];

  return{
    getWodItem: function(id){
            var data=null;
             wodItems.forEach(function(value, index, ar){
             if(value.id == id ){
              console.log(value.text);
              data = value;
              }
         });
         return data;
  }, //end getWodItems
    micCheck:function(){

      console.log('check one two three');
    },
    getQueryParam:function(name, url){

    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  };
})

//Adding some comments
