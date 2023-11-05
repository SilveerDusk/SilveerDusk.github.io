import blogs from '@/blogData';
import BlogPreview from '@/components/blogPreview';

export default function Blogs() {
  return (<div>
			<div className="centered">
        <h1 className='title'>My Blogs</h1>
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