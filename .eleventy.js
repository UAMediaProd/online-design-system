// add in Prism.js highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const isProduction = process.env.NODE_ENV === `production`;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");

  const MarkdownIt = require("markdown-it");
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
  return mdRender.render(rawString);
  });
  
  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: '_layouts'
    },
    pathPrefix: isProduction ? '/online-design-system/' : '/',
  };
};

