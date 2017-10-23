var express = require('express');
var app = express();
const path = require('path');

// Environment variables
const node_env = process.env.NODE_ENV || "Local";
const env_var = process.env.ENV_VAR || "Local";
const env_color = process.env.ENV_COLOR || "DodgerBlue";

const env = {
  NODE_ENV: node_env,
  ENV_VAR: env_var,
  ENV_COLOR: env_color
};

app.set('port', (env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.get('/api/getEnvironment', function(request, response){
  const envVar = {
    name: env.ENV_VAR,
    color: env.ENV_COLOR
  };

  response.json(envVar);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
  console.log('NODE_ENV: '+ env.NODE_ENV);
});
