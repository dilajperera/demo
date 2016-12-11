<!doctype html>
<html lang="en" ng-app="sms">
<head>
    <meta charset="utf-8">
    <title>sms</title>
    <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
    <link href="css/styles.css" rel="stylesheet">
    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular/angular-route.js"></script>
    <script src="lib/underscore/underscore.js"></script>
    <script src="lib/underscore/angular-underscore-module.js"></script>
    <script src="js/app.js"></script>
    <script src="js/mainController.js"></script>
    <script src="js/studentController.js"></script>
    <script src="js/services.js"></script>
    <script src="js/directives.js"></script>
</head>

<body>
<%--
<div class="col-md-12" id="content">
    <div class="panel">
        <div class="panel-body" style="padding:35px">
            <ng-view></ng-view>
        </div>
    </div>
</div>
--%>
<ng-view></ng-view>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-right"><h5>©Company 2014</h5></div>
        </div>
    </div>
</footer>

</body>
</html>
