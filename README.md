# Interior Design
A repository for our internship project.\
*Task description* - Design an interior designing website using all the concepts you have learned so far.
It should have menus, search bar, footer, etc.
It should be responsive on all devices.
Use carosal for images.
It should have multiple sections.
Site should look professional.

### Basics:
+ You need Node.js v14 or above to run the complete version of this site. Get it [Here↗](https://nodejs.org/en/).
+ After installing Nodejs, open your command prompt and type `node -v` and check your nodejs version.
+ Click on the jump link based on your role.
+ [For Teammates↗](#for-teammates)
+ [For Mentors↗](#for-mentors)

## For Teammates:
+ Navigation Guide:
	- The `src/public` folder is where all the css, js and other media files go.
	- The html pages are stored in the `src/pages` folder.
		Add new html files here and they will be automatically added to the site at `localhost/file` for `file.html`.
	- The `index.html` file has been rerouted to `localhost/`.
	- The backend structure of the site is defined in the `src/index.js` file.
		Do not modify this file if you don't know what you are doing.
	- All the assets in the `src/public` folder can be accessed as `localhost/<path>`.
		Example - `src/public/css/style.css` can be accessed as `localhost/css/style.css`.
+ Navigate to the project folder and start the command prompt.
+ Type `npm test` to start the site in development mode.
	This preserves all developer dependencies, which is important for writing/editing code.
+ If you're having any issues running the site, please feel free to contact me.

## Important:
Please remember to always use pull before pushing new code to the repository.
This helps to prevent code conflicts when working in a team.
Teams usually have separate branches when implementing new features, but we haven't decided on anything yet.

## A Small Note:
Please try to separate different styles into different css files and also the js files as it will help in debugging.


### For Mentors:
+ Navigation Guide:
	- The `src/public` folder is where all the static assets, minus the html, are located.
	- The html files are saved in the `src/pages` folder.
	- The backend is structured in `src/index.js` file.
	- All html files can be accessed by going to the route `localhost/file` for `file.html`.
	- All the public assets can be accessed as `localhost/<path>`.
		Example - `src/public/css/style.css` can be accessed as `localhost/css/style.css`.
+ Open terminal in root directory (where the package.json is located at.).
+ Type `npm start` to start the site in production mode.
	This deletes all developer dependencies, which is are not useful for just checking the site.
+ If you are having port issues, please change the port in package.json start script.
	I have used the port 80 which is the default localhost port for windows.
