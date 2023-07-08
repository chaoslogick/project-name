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

const yargs = require('yargs');

const VERSION = '1.0.0';

const _options = yargs
 // .usage("Usage: -n <name>")
 // .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const wordlist = require('./data/wordlist.json');

function getW0() {
  return [...wordlist.w0]
}

function getW1() {
  return [...wordlist.w0]
}

function banner() {
  console.log('\nprojectname.js %s', VERSION);
  console.log('Name generator for new projects\n');
}

function generate() {
  const w0 = getW0();
  const w1 = getW1();
  return `${w0[Math.floor(Math.random()*w0.length)]}-${w1[Math.floor(Math.random()*w1.length)]}`;
}

(function main(_args) {
  banner();

  const name = generate();
  console.log('Project: %s\n', name);
})();
