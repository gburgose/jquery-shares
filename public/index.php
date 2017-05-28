<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jQuery Shares</title>
	<link type="text/css" rel="stylesheet" href="./assets/css/sample.css?v=<?php echo rand(1,1000); ?>">
	<script src="./assets/js/sample.js?v=<?php echo rand(1,1000); ?>"></script>
</head>
<body>

	<div class="section section-introduce">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1>jQuery Shares</h1>
				</div>
			</div>
		</div>
	</div>

	<div class="container">

		<div class="links">
			
			<!-- Facebook -->
			<a href="https://www.facebook.com"
				 class="share facebook">
				 <i class="fa fa-facebook"></i>
			</a>

			<!-- Twitter -->
			<a href="https://www.twitter.com" 
				 data-text="The best thing that can be shared is knowledge." 
				 class="share twitter">
				 <i class="fa fa-twitter"></i>
			</a>

			<!-- Linkedin -->
			<a href="https://www.linkedin.com" 
				 data-text="The best thing that can be shared is knowledge." 
				 class="share linkedin">
				 <i class="fa fa-linkedin"></i>
			</a>

			<!-- Google Plus -->
			<a href="https://plus.google.com/" 
				 class="share googleplus">
				 <i class="fa fa-google-plus"></i>
			</a>

			<!-- Pinterest -->
			<a href="https://cl.pinterest.com/"
				 data-text="The best thing that can be shared is knowledge." 
				 class="share pinterest">
				 <i class="fa fa-pinterest"></i>
			</a>

			<!-- E-mail -->
			<a href="http://localhost:3101/"
				data-to="hola@gabrielburgos.cl"
				data-subject="Share by e-Mail"
				data-body="The best thing that can be shared is knowledge."
				class="share email">
				<i class="fa fa-envelope-o"></i>
			</a>

		</div>

	</div>

</body>
</html>