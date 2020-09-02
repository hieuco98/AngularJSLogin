angular.module("app").service("RegisterService", RegisterService);
RegisterService.$inject = ["$timeout", "$filter", "$q"];
function RegisterService($timeout, $filter, $q) {
  var service = {};service.get = get;service.getByUsername = getByUsername;service.create = create;
  return service;
  function get() {
    var deferred = $q.defer();
    deferred.resolve(getUsers());
    return deferred.promise;
  }
  function getByUsername(username) {
    var deferred = $q.defer();
    var filtered = $filter("filter")(getUsers(), { username: username });
    var user = filtered.length ? filtered[0] : null;
    deferred.resolve(user);
    return deferred.promise;
  }

  function create(user) {
    var deferred = $q.defer();// simulate api call with $timeout
    $timeout(function () {
      getByUsername(user.username).then(function (duplicateUser) {
        if (duplicateUser !== null) {
          deferred.resolve({success: false,
            message: 'Username "' + user.username + '" is already exists',
          });
        } else {
          var users = getUsers();
          var lastUser = users[users.length - 1] || { id: 0 };
          user.id = lastUser.id + 1;
          users.push(user);
          createUser(users);
          deferred.resolve({ success: true });}
      });
    }, 1000);
    return deferred.promise;}
  function getUsers() {
    if(!localStorage.users)localStorage.users = JSON.stringify([]);
    return JSON.parse(localStorage.users);}
  function createUser(users) {localStorage.users = JSON.stringify(users);}
}
