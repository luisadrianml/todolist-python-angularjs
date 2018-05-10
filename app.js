angular.module('KSTodoListTracker', [])
		.controller('ToDoListController', ToDoListController)
        .config(function ($httpProvider) {
          $httpProvider.useApplyAsync(true);
        });

		ToDoListController.$inject = ['$scope','$http'];
		
		function ToDoListController($scope, $http) {
			var showList = this;
            $scope.response = null;
	  		showList.items = null;
	  		showList.newItem = "";
            showList.newItem2 = "";
            $scope.api = "http://cisc5550final.eastus.azurecontainer.io:6001/api/";
            $scope.itemsURL = $scope.api+"items";
            $scope.addURL = $scope.api+"add";
            $scope.deleteURL = $scope.api+"delete/";
            $scope.markURL = $scope.api+"mark/";

            $http.get($scope.itemsURL).success(function(data) {
                showList.items = data;
                $scope.response = data;

            });     
            
            $scope.run = function() {
                $http.get($scope.itemsURL).success(function(data) {
                showList.items = data;
                $scope.response = data;
            }); 
            }
        
  			showList.completeToDoItem = function(itemName){
    		$http.put($scope.markURL+itemName).then(function(response) {
                    console.log(response);
                   $scope.run();
                }, function(response) {
                    console.log(response);
                    $scope.run();

                });
  			};
  			
  			showList.deleteToDoItem = function(itemValue){
                $http.delete($scope.deleteURL+itemValue).then(function(response) {
                    console.log(response);
                   $scope.run();
                }, function(response) {
                    console.log(response);
                    $scope.run();

                });
  			};
  			
  			showList.addNewItem = function () {
		   var item = {
				what_to_do: showList.newItem,
                due_date: showList.newItem2,
                status: ""
				};
            $http.post($scope.addURL, item).then(function(response) {
                console.log(response)
                $scope.run();
            }, function(response) {
                console.log(response);
            });
  			}
            
            showList.log = function(item) {
		      console.log(item)
            }
            
		}



