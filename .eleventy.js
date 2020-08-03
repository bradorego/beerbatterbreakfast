module.exports = function (config) {

  config.addLayoutAlias("category", "_layouts/category.html");
  config.addLayoutAlias("default", "_layouts/default.html");
  config.addLayoutAlias("page", "_layouts/page.html");
  config.addLayoutAlias("post", "_layouts/post.html");

  return {
    "dir": {
      "input": "./",
      "output": "./_site"
    }
  }
};
