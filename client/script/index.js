Vue.component('navbar', {
  props: ['title'],
  template: '#nav-bar'
});

Vue.component('side-bar', {
  props: ['posts'],
  template: '#side-bar',
  methods: {}
});

Vue.component('post', {
  props: ['selected'],
  template: '#post-template'
});


let main = new Vue({
  el: "#main",
  data: {
    title: 'Web Logs',
    posts: [
      {
        author: "Cicero",
        title: "de Finibus Bonorum",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        author: "John Doe",
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    selected: {
      author: "",
      title: "",
      content: ""
    }
  },
  methods: {
    selectPost: function(index) {
      this.selected.author = this.posts[index].author;
      this.selected.title = this.posts[index].title;
      this.selected.content = this.posts[index].content;

      localStorage.setItem('author', this.selected.author);
      localStorage.setItem('title', this.selected.title);
      localStorage.setItem('content', this.selected.content);
    }
  },
  created: function() {

    let lastPost = localStorage.getItem('author');

    if (lastPost) {
      this.selected.author = localStorage.getItem('author', this.selected.author);
      this.selected.title = localStorage.getItem('title', this.selected.title);
      this.selected.content = localStorage.getItem('content', this.selected.content);
    }

  }
});
