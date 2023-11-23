import BlogPreview from '@/components/blogPreview';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';
import IComment from '@/database/blogSchema'

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blogs() {
  const blogData = await getBlogs();
  return (<div>
			<div className="centered">
        <h1 className='title'>My Blogs</h1>
        <div id="container">
          <ul id="blog-list">
            {blogData && blogData.map(blog => 
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