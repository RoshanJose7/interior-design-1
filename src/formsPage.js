module.exports = {
	top: `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Our Contact Forms</title>

		<!-- Rating of our site. General means that it will be open for everyone to see. -->
		<meta name="rating" content="General" />

		<!-- Description of our site. Sometimes, this is used by the search engines. -->
		<meta name="description" content="Our contact forms." />

		<!-- Change this to our site's theme color when we decide it. -->
		<meta name="theme-color" content="#" />

		<!-- These are open graph tags which are used to embed links on sites like facebook. -->
		<meta property="og:title" content="Contact Forms" />
		<meta property="og:image" content="/logo.png" />
		<meta property="og:image:alt" content="Logo of our team." />
		<meta property="og:description" content="Our Contact Forms" />
		<meta property="article:author" content="WD06B6 Team." />

		<!-- Site icons -->
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
		<link rel="mask-icon" href="/favicon.ico" color="#" />

		<!-- Bootstrap CDN -->
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
			integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
			crossorigin="anonymous"
		/>

		<!-- External files. -->
		<link rel="stylesheet" href="/css/main-style.css" />
	</head>
	<body>
		<div class="container-fluid">
			<h2 class="text-center ital" style="margin: 2em auto;"><a href='/'> Return Home↗ </a></h2>
			<div class="table-responsive col-md-11 mx-auto">
				<table class="table table-hover tagline">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">E-mail</th>
							<th scope="col">Subject</th>
							<th scope="col">Message</th>
							<th scope="col">Time</th>
						</tr>
					</thead>
	`,
	bottom: `
				</table>
			</div>
		</div>
	</body>
</html>
	`
};
