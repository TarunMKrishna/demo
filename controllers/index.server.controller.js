exports.insert = function(req, res){
    var login = require('mongoose').model('logininfo');
    var log= new login;
        log.name=req.body.name;
        log.password=req.body.password;
        log.usn=req.body.usn;
        log.email=req.body.email;
        log.phone=req.body.phone;

     var conditions={name:log.name}
     ,update = {
       name:log.name,
       password:log.password,
       usn:log.usn,
       email:log.email,
       phone:log.phone
      }
    , options = { multi: false,upsert: true};
    login.update(conditions, update, options,function(err,doc){
      if(err){
        console.log(err);
      }
      console.log(doc);
      console.log("saved successfully");
      res.redirect('/');
    });
  }
 /* exports.searched=async function(req,res){
    console.log(searchedBooks);
    res.render('searched', {
      searchedBooks: searchedBooks,
    });
  }
  
  
  exports.filter=async function(req,res){
    var Book = require('mongoose').model('login');
    var cat=req.body.cat;
    var sort=req.body.sort;
    await Book.find({ "categories": cat}).sort({[sort]: 'asc'}).exec( function (err, books) {
      if(err)
      {
        return handleError(err);
      }
     filteredBooks=books;
     res.redirect('filtered');
    });
  }
  
  
  exports.filtered=async function(req,res){
    res.render('filtered', {
      filteredBooks: filteredBooks,
    });
  }*/