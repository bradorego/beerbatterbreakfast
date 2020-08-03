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

  return {
    "dir": {
      "input": "./",
      "output": "./_site"
    },
    "passthroughhFileCopy": true
  }
};
