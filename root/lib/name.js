/*
 * {%= name %}
 * {%= homepage %}
 *
 * {%= copyright %}
 * Licensed under the {%= license %} license.
 */

var index = require('./index.js');
var ligle = index.ligle;
var config = index.cfg;
var logger = index.logger;

// 模型
var {%= model %}  = ligle.model.ModelBase.extend({
  __className: '{%= model_name %}',
  __upDir: '{%= model_name %}',
  init:function(obj){
    this._super(obj);
  },
  coll:{name: '{%= model_name %}', fields:{}},
  rest:{},
});

module.exports = {%= model %};
