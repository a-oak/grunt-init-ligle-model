/*
 * {%= name %}
 * {%= homepage %}
 *
 * {%= copyright %}
 * Licensed under the {%= license %} license.
 */
var defaultCfg={
  loggerName: '{%= name %}',
  loggerLevel: 'TRACE',
};

function checkDependencies(){
  // check dependencies here
}

module.exports = function(ligle,cfg){
  if(ligle.model.{%= model %}){
    return ligle.model.{%= model %};
  }
  checkDependencies();

  var config = ligle.util.configure(cfg,defaultCfg);
  var engineLogLevel = ligle.cfg.loggerLevel;
  if (engineLogLevel){  // use loggerLevel of engine.
    config = ligle.util.configure({loggerLevel:engineLogLevel},config);
  }

  var logger = ligle.util.logger(config.loggerName,config.loggerLevel);
  module.exports.logger = logger;
  module.exports.cfg = config;
  module.exports.ligle = ligle;

  logger.trace('defining {%= model %} model',config);
  // 模型
  var Model  = require('./{%= model_name %}.js');
  ligle.model.{%= model %} = Model;
  ligle.model.{%= model %}.cfg = config;
};
