module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  app.route('/').get(index.render);
  app.post('/insert',index.insert);
 // app.get('/searched',index.searched);
  //app.post('/filter',index.filter);
  //app.get('/filtered',index.filtered);
};