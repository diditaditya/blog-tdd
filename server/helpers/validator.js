let validator = {
  isAuthorValid: function(req, res, next) {
    let author = req.body.author;
    if (author.length >= 3) {
      if ((/^\w+([\ ]\w+)*/ig).test(author)) {
        req.status = "success";
        next();
      } else {
        req.status = "failed";
        req.message = "Author name must be letters";
      }
    } else {
      req.status = "failed";
      req.message = "Author name must be at least 3 letters";
      next();
    }

  },
  isTitleValid: function(req, res, next) {

  },
  isContentValid: function(req, res, next) {

  }
}

module.exports = validator;
