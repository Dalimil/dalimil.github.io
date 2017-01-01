#!/bin/bash

# browserify js/main.js | uglifyjs > bundle.js
uglifyjs js/main.js > bundle.js
