var jobListing = angular.module('JobListingApp', []);
/**
 * Main controller
 */
jobListing.controller('mainController', function ($scope, $http) {

    var url = "./taskJson.json";
    
    $scope.jobs = [];
    $scope.job = {};
    $scope.msg = null;

/**
 * Getting jobs
 */
    $http.get(url).
        then(function onSuccess(response) {
            $scope.jobs = response.data.jobs;
        }).
        catch(function onError(response) {
            $scope.msg = response.statusText;
        });
            
/**
 * Getting job by id
 * @param {type} jobId
 */
    $scope.showJob = function (jobId) {
        $scope.newJob = jobId;
        $http.get(url + '/job/' + $scope.newJob).
            then(function onSuccess(response) {
                // reset the object
                $scope.newJob = {};
                $scope.job = response.data.job;
            }).
            catch(function onError(response) {
                $scope.msg = response.statusText;
            });
    };

})