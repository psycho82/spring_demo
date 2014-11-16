<!doctype html>
<html ng-app="myNoteApp">

<head>
<script src="/demo/resources/js/angular.min.js"></script>
</head>

<body>
<h1>
	Hello world!  
</h1>

<div ng-controller="userHomeCtrl">
<h2>Hello {{username}} you are the {{counter}}</span></h2>

<h2>My Note {{message.length}}</span></h2>

<p><textarea ng-model="message" cols="40" rows="10"></textarea></p>

<p>
<button ng_click="save()">Save</button>
<button ng-click="clear()">Clear</button>
</p>

<p>Number of characters left: <span ng-bind="left()"></span></p>

</div>

<script src="/demo/resources/js/myNoteApp.js"></script>
<script src="/demo/resources/js/userHomeCtrl.js"></script>

</body>
</html>