#!/bin/bash

# browserify js/main.js | uglifyjs > js/bundle.js
uglifyjs js/main.js > bundle.js
