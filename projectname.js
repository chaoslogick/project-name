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

let yargs = require('yargs');
let axios = require('axios');

const VERSION = '1.0.0';

const options = yargs
 // .usage("Usage: -n <name>")
 // .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

let wordlist = require('./data/wordlist.json');

function getW0() {
  console.log(`${wordlist.w0}`);
}

function getW1() {
  return wordlist.w1.split(',');
}

function banner() {
  console.log('\nprojectname.js %s', VERSION);
  console.log('Name generator for new projects\n');
}

function generate() {
  let w0 = getW0();
  let w1 = getW1();
  return `${w0[Math.floor(Math.random()*w0.length)]} - ${w1[Math.floor(Math.random()*w1.length)]}`;
}

(function main(args) {
  banner();

  let name = generate();
  console.log('Project: %s\n', name);
})();
