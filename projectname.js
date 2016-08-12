#!/usr/bin/env node

/*
 * projectname.js
 * Name generator for new projects
 *
 * Author: Michael Perry Goodman
 * Created: 08/12/2016
 *
 */

'use strict';

// constants
const VERSION = '1.0.0';

// data
function getFirstNameArray() {
  let fname = require('./data/firstword.json');
  return fname.wordlist;
}

function getSecondNameArray() {
  let sname = require('./data/secondword.json');
  return sname.wordlist;
}

// banner
function banner() {
  console.log('\nprojectname.js %s', VERSION);
  console.log('Name generator for new projects\n');
}

// generate name
function generate() {
  let fname = getFirstNameArray();
  let sname = getSecondNameArray();
  return fname[Math.floor(Math.random()*fname.length)]+'-'+sname[Math.floor(Math.random()*sname.length)];
}

// main
(function main() {
  banner();

  let name = generate();
  console.log('Project: %s\n', name);
})();
