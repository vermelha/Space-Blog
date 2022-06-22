push to Heroku: 
heroku config:set NPM_CONFIG_PRODUCTION=false 
.
.
.
heroku config:set HOST=0.0.0.0  
.
.
.
heroku config:set NODE_ENV=production   
.
.
.
git push heroku master 

Preview: https://fast-shelf-95292.herokuapp.com/login