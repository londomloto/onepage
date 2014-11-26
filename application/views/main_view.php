<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="<?php echo base_url(); ?>public/vendor/ext/resources/css/ext-all-neptune.css" />
		<style>
			#header {
				height: 50px;
				background-color: #333;
			}
			.menu-item {
				display: block;
				font-size: 14px;
				color: #fff;
				padding: 10px 15px;
				text-decoration: none;
			}
			.menu-item:hover {
				background-color: #5EAAE0;
			}
			.menu-item + .menu-item {
				border-top: solid 1px #5EAAE0;
			}
		</style>
	</head>
	<body>
		<header id="header">
			<div class="logo-wrapper"></div>
		</header>

		<script src="<?php echo base_url(); ?>public/vendor/ext/ext-all.js"></script>
		<script src="<?php echo base_url(); ?>public/js/app.js"></script>
	</body>
</html>