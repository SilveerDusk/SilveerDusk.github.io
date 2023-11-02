import blogs from '@/blogData';
import BlogPreview from '@/components/blogPreview';

export default function Blogs() {
  return (<div>
			<div className="centered">
        <h1 className="page-title">Learn More</h1>
        <p>I&#39;m the prime age of 19... get it?</p>
        <div id="container">
          <ul id="blog-list">
            {blogs.map(blog => 
              <BlogPreview
                key={blog.title}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                slug={blog.slug}
            />
            )}
          </ul>
        </div>
      </div>
			</div>) 
}