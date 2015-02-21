<html ng-app="progressLinearDemo1">
<head>

    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/angular_material/0.7.1/angular-material.min.css">
    <link rel="stylesheet" type="text/css" href="static/style.css" />

</head>
<body>
<h2>Hello World!</h2>
<h2>${message}</h2>
<div ng-controller="AppCtrl" layout="column" layout-margin style="padding:25px;">
  <md-progress-linear md-mode="indeterminate"></md-progress-linear>
  <md-progress-linear class="md-warn" md-mode="buffer" value="{{determinateValue}}" md-buffer-value="{{determinateValue2}}">
  </md-progress-linear>
  <md-progress-linear class="md-accent" md-mode="{{mode}}" value="{{determinateValue}}"></md-progress-linear>
</div>

    <!-- Angular Material Dependencies -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-animate.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-aria.min.js"></script>

    <script src="//ajax.googleapis.com/ajax/libs/angular_material/0.7.1/angular-material.min.js"></script>

    <script type="text/javascript" src=static/DemoController.js></script>

</body>
</html>

