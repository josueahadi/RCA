module.exports = function (eleventyConfig) {
    for (const path of ["docs", "fonts", "images", "js", "styles"]) {
        eleventyConfig.addPassthroughCopy(path);
    }

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid"
    };
};
