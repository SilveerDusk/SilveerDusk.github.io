import Image from 'next/image';
import Comment from '@/components/comment';

type IParams = {
  params: {
      slug: string
  }
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

function parseCommentTime(time: Date) {
  /*
  Parses MongoDB/TS date object
  :param time: date object
  :return: string reprsenting date
  */
  // Convert to Los Angeles time
  const losAngelesDate = new Date(
      time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );

  // Format the date as desired
  const formattedDate = losAngelesDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
  });
  return formattedDate;
}

export default async function Blog({ params }: IParams) {
	const { slug } = params // another destructure
	const blog = await getBlog(slug);

  return (<div>
    <div className="centered">
      <div className="post">
        <h1 className="title">{blog.title}</h1>
        <Image src={blog.img} alt={blog.title} width={600} height={600}/>
        <h3 className="sub-sub-title">{parseCommentTime(blog.date)}</h3>
        <p className="post_p">{blog.content}</p>
      </div>
    </div>
    <div className='post'>
      <h1 className="sub-title">Comment Section</h1>
      {blog.comments.map((comment: String, index: number) => (
	      <Comment key={index} comment={comment} />
	    ))}
    </div>
    </div>
  )
}
