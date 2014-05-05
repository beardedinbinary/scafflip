scafflip
========

Front-end setup for projects to use Bower and Grunt for compiling websites.

TO START, PLEASE PERFORM A CLEAN INSTALL OF FOUNDATION & GRUNT. FOR FOUNDATION,
USE BOWER TO INSTALL. FOR GRUNT, USE NODE (npm) TO INSTALL.


```
bower install foundation

npm install grunt

npm install grunt-contrib-concat

npm install grunt-contrib-uglify

npm install grunt-contrib-watch

npm install grunt-sass

npm install node-sass
```

Then, get f11p_components & Gruntfile.js from GitHub:
[https://github.com/Flipeleven/scafflip]

To setup in an existing directory:
1. clone into a temporary directory, 
2. move the `.git/` from the temporary directory into your project
3. delete the temporary directory
4. run `git reset --hard HEAD` to restore files. 

Please note, you will have to update your repo's `origin` remote, to match the appropriate destination for your project
