
        angular.module('app').controller('registerController', registerController)
        registerController.$inject = ['RegisterService','$location'];
        function registerController(RegisterService,$location) {
            var vm = this;//console.log("register success" + vm.user);
            vm.register = register;
            function register(){console.log('register()')//'success' + vm.user);
                RegisterService.create(vm.user).then(res=>{
                        if(res.success){
                            alert('Register success');
                            console.log("Success")
                            $location.path('/');
                        }else{alert(res.message);console.log(res.message);}
                    });
            }
        }
    
    