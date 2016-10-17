/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

var webpack = require('webpack');
var path = require('path')

var __DEV__ = false;

// inject additional keys into both webpack configs
var inject = {
  context: __dirname,
}


// add other things here
var frontend = Object.assign({}, require(__dirname + '/webpack.config.js'), inject)
var backend = Object.assign({}, require(__dirname + '/webpack.backend.js'), inject)

module.exports = [backend, frontend]