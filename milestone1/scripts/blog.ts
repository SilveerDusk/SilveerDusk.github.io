type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Dinner Date with Xavier",
    date: "10/22/23",
    description: "Over the Summer I had a Fun Day Chefing with My Bestie",
    slug: "blog2"
  },
  {
    title: "My Cats",
    date: "10/23/23",
    description: "Meet My Cats Investigating My Bagel",
    slug: "blog1"
  }
];

function getBlog() {
  const blogList = document.getElementById("blog-list");

  blogs.forEach(({slug, title, date, description}) => {
    const link =  document.createElement("a");
    link.href = `blogs/${slug}.html`;
    link.innerHTML = "Read More";
    const postPreview = document.createElement("div");
    postPreview.classList.add("post");
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