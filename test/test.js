var assert = require('assert');

describe('Display filtered task', function() {
  var tasks = [{id:1, desc:'task', done:true},
               {id:2, desc:'task', done:true}
               {id:3, desc:'task', done:true}
               {id:4, desc:'task', done:false}
               {id:5, desc:'task', done:false}
               {id:6, desc:'task', done:false}
               {id:7, desc:'task', done:false}
               {id:8, desc:'task', done:false}
               {id:9, desc:'task', done:false}
               {id:10, desc:'task', done:false}];
  it('should return 3 done tasks given an array of 10 with 3 done', function() {
    assert.equal(tasks)
  })
})
