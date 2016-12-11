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
    <script src="js/controllers.js"></script>
    <script src="js/services.js"></script>
    <script src="js/directives.js"></script>
</head>

<body>

<nav class="navbar navbar-static">
    <div class="container">
        <div class="navbar-header">
            <!-- <a class="navbar-brand" href="http://www.bootply.com" target="ext"><b>Bootply</b></a> -->
            <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">3
                <span class="glyphicon glyphicon-chevron-down"></span>
            </a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="#/profiles">Student Profiles</a></li>
                <li><a href="#/new">New Profile</a></li>
            </ul>
            <ul class="nav navbar-right navbar-nav">
                <li><a href="#/logout">Log out</a></li>
            </ul>
        </div>
    </div>
</nav>

<header class="masthead">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1><a href="#" title="Scroll down for your viewing pleasure">Demo Application</a>
                    <p class="lead">Crossover Demo Application</p></h1>
            </div>

        </div>
    </div>
</header>

<!-- right content column-->
<div class="col-md-12" id="content">
    <div class="panel">
        <div class="panel-body" style="padding:35px">
            <ng-view></ng-view>
        </div>
    </div>
</div>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-right"><h5>©Company 2014</h5></div>
        </div>
    </div>
</footer>
</body>
</html>
