module.exports = function (eleventyConfig) {

  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("category", "layouts/category.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('public');

  eleventyConfig.setLiquidOptions({
    "dynamicPartials": true
  });

  eleventyConfig.addCollection("sorted-category", function (collection) {
    return collection.getFilteredByTag("category").sort(function (a, b) {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  eleventyConfig.addCollection("posts-only-descending", function (collection) {
    return collection.getFilteredByGlob("_posts/*").reverse();
  });

  return {
    "dir": {
      "input": "./",
      "output": "./_site"
    },
    "passthroughFileCopy": true
  }
};
