var app = angular.module("myApp", []);
app.controller('myCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'userData.json'
    }).then(function (response) {
        console.log(response);
        $scope.storeRes = response.data;
    })
})
app.filter('nameFilter', function () {
    return function (objects, criteria) {
        var filterResult = new Array();
        if (!criteria)
            return objects;

        for (index in objects) {
            /*console.log(" objects[index].id.match(criteria)", /objects[index].id/.test(/^\d{0,9}$/) != null)
console.log(" objects[index].firstname", objects[index].firstname)*/
            if (isNaN(criteria)) {

                if (objects[index].firstname.indexOf(criteria) != -1) // filter by name only
                    filterResult.push(objects[index]);
            } else {
                var num = objects[index].id.toString()
                if (num.indexOf(criteria) != -1)
                    filterResult.push(objects[index]);
            }
        }
        console.log(filterResult);
        return filterResult;
    }
})

/*
var app = angular.module('myapp', [], function () {});

app.controller('AppController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'userData.json'
    }).then(function (res) {
        console.log(res);
        $scope.authorisations = res.data;
    })
});


app.filter('nameFilter', function () {
    return function (objects, criteria) {
        console.log("objects", objects)
        console.log("criteria", criteria)
        var filterResult = new Array();
        if (!criteria)
            return objects;

        for (index in objects) {
            console.log("objects[index].name", objects[index].name)
            console.log("objects[index].name.indexOf(criteria)", objects[index].name.indexOf(criteria))
            if (objects[index].name.indexOf(criteria) != -1) // filter by name only
                filterResult.push(objects[index]);
        }
        console.log(filterResult);
        return filterResult;
    }
});
*/



/*
[
    {
        "firstname": "aliya",
        "lastname": "",
        "id": 153,
        "personid": "c8cf3989-9a8f-4633-a752-1f7a028391b0",
        "url": "folder"
  },
    {
        "firstname": "amir",
        "lastname": "",
        "id": 147,
        "personid": "d1aa117e-a779-4ed2-8237-28c974030be2",
        "url": "folder"
  },
    {
        "firstname": "anushka",
        "lastname": "",
        "id": 163,
        "personid": "88e24f3c-7f44-4c43-bd2a-167c24b1f40c",
        "url": "folder"
  },
    {
        "firstname": "ayushmann",
        "lastname": "khurana",
        "id": 91,
        "personid": "e13e8144-f86f-4797-9e42-22e64098fe61",
        "url": "folder"
  },
    {
        "firstname": "benedict",
        "lastname": "cumberbatch",
        "id": 135,
        "personid": "68e20c61-e141-4bf9-ae57-4b7215d8481e",
        "url": "folder"
  }
]
*/

/*[
    {

        "number": "453",
        "name": "Apple Inc."

        },
    {

        "number": "123",
        "name": "Microsoft Inc."

        }]*/
