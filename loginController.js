//(function(){'use strict';
        angular.module('app').controller('loginController', loginController)
        loginController.$inject = ['$location','LoginService'];
        function loginController($location,LoginService) {
            var vm = this;
            vm.login = login;
            (function initController(){LoginService.ClearCredentials();})();
            function login(){
                console.log("login is loading");
                LoginService.Login(vm.username,vm.password,function(response)
                {
                    if(response.success)
                    {
                        LoginService.SetCredentials(vm.username,vm.password);
                        $location.path('/home');
                    }
                    else{
                        console.log("Register Failed");
                        alert(response.message);
                    }
                });}}
    //})();