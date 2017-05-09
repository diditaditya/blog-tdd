const BlogPost = require('../models/blog');

let blogPostControl = {
  showAll: (req, res) => {
    BlogPost.find({}, (err, blogPosts) => {
      if (err) {
        res.send(err);
      } else {
        res.send(blogPosts);
      }
    });
  },
  add: (req, res) => {
    if (req.status === "success") {
      let author = req.body.author;
      let title = req.body.title;
      let content = req.body.content;
      let img = req.body.img;
      let createdAt = req.body.createdAt;
      let tags = req.body.tags;
      if (author && title && content && createdAt) {
        let blogPost = new BlogPost({
          author: author,
          title: title,
          content: content,
          img: img,
          createdAt: createdAt,
          tags: tags
        });
        blogPost.save((err) => {
          if (err) {
            res.send(err);
          } else {
            let status = 'success';
            let message = 'BlogPost is successfully added to database';
            let blogPost = blogPost;
            res.send({status: status, message: message, blogPost: blogPost});
          }
        });
      } else {
        let status = 'failed';
        let message = 'author, title, content, createdAt must not be empty';
        res.send({status: status, message: message});
      }
    } else {
      res.send({status: req.status, message: req.message});
    }

  },
  showOne: (req, res) => {
    BlogPost.findById(req.params.id, (err, blogPost) => {
      if (err) {
        res.send(err);
      } else {
        res.send(blogPost);
      }
    });
  },
  update: (req, res) => {
    if (req.status === "success") {
      BlogPost.findById(req.params.id, (err, blogPost) => {
        if (err) {
          res.send(err);
        } else {
          let author = req.body.author || blogPost.author;
          let title = req.body.title || blogPost.title;
          let content = req.body.content || blogPost.content;
          let img = req.body.img || blogPost.img;
          let createdAt = req.body.createdAt || blogPost.createdAt;
          let tags = req.body.tags || blogPost.tags;
          BlogPost.update({_id: req.params.id}, {$set:{
            author: author,
            title: title,
            content: content,
            img: img,
            createdAt: createdAt,
            tags: tags
          }}, (err, updated) => {
            if (err) {
              res.send(err);
            } else {
              let status = 'success';
              let message = 'BlogPost is successfully updated';
              let blogPost = blogPost;
              res.send({status: status, message: message, blogPost: blogPost});
            }
          });
        }
      });
    } else {
      res.send({status: req.status, message: req.message});
    }
  },
  delete: (req, res) => {
    BlogPost.findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err) {
        res.send(err);
      } else {
        res.send(deleted);
      }
    });

  }
};


module.exports = blogPostControl;
