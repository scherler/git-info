#! /usr/bin/env node
'use strict';
const gitInfo  = require('./index');
const userArgs = process.argv.slice(2);

function result(err, response){
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
}

if (userArgs[0]) {
  gitInfo(userArgs, result);
} else {
  gitInfo(result);
}
