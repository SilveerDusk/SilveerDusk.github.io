type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
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
  const blogList = document.getElementById("blog-list");

  blogs.forEach(({slug, title, date, description}) => {
    const link =  document.createElement("a");
    link.href = `blogs/${slug}.html`;
    link.innerHTML = "Read More";
    const postPreview = document.createElement("div");
    postPreview.classList.add("post-preview");
    postPreview.innerHTML = `
    <div class="top">
    <h2 class="post-title">${title}</h2>
    <h3 class="post-subtitle">${date}</h3>
    </div>
    <p class="post-description">${description}</p>`;

    postPreview.appendChild(link);
    if(blogList){
      blogList.appendChild(postPreview)
    }
  });
}

getBlog();