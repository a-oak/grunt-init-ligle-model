var expect = require('chai').expect;
var should = require('chai').should();
var ligle = require('ligle-engine')({
  loggerLevel:'INFO',
  db:{
    name:'ligle-test',
    host: '127.0.0.1',
    port:27017,
  },
});


/// 下面两个变量，辅助测试延迟相应。
var delay = 100;// test must be delayed to avoid conflict
var nTest = 1; // used for delay


require('../lib/index.js')(ligle);
describe('{%= name %}',function(){
  var Model = ligle.model.{%= model %};
  before(function(done){
    ligle.db.start(function(err,db){
      done();
    });
  });

  it('new object',function(){
    var m = new Model();
    should.exist(m);
  });

  it('saving',function(done){
    var m = new Model({name:'123'});
    m.save(function(err,obj){
      should.not.exist(err);
      expect(obj.name).equal('123');
      done();
    });
  });

  after(function(done){
    ligle.db.dropDatabase(function(){
      ligle.db.close();
      done();
    });
  });
});
