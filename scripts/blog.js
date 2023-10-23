var blogs = [
    {
        title: "test-1",
        date: "10/22/23",
        description: "the first test blog",
        slug: "template"
    },
    {
        title: "test-2",
        date: "10/23/23",
        description: "the second test blog",
        slug: "template"
    }
];
function getBlog() {
    var blogList = document.getElementById("blog-list");
    blogs.forEach(function (_a) {
        var slug = _a.slug, title = _a.title, date = _a.date, description = _a.description;
        var link = document.createElement("a");
        link.href = "blogs/".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = "\n    <div class=\"top\">\n    <h2 class=\"post-title\">".concat(title, "</h2>\n    <h3 class=\"post-subtitle\">").concat(date, "</h3>\n    </div>\n    <p class=\"post-description\">").concat(description, "</p>");
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}
getBlog();
