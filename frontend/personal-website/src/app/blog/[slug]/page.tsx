'use client';
import Image from 'next/image';
import Comment from '@/components/comments/comment';
import React, { useState, useEffect } from 'react';
import { IBlog, IComment } from '@/database/blogSchema';
import style from '@/blog/[slug]/page.module.css';

type IParams = {
  params: {
    slug: string;
  };
};

function parseCommentTime(time: Date) {
  /*
  Parses MongoDB/TS date object
  :param time: date object
  :return: string reprsenting date
  */
  // Convert to Los Angeles time
  const losAngelesDate = new Date(
    time.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
  );

  // Format the date as desired
  const formattedDate = losAngelesDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
}

export default function Blog({ params }: IParams) {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const { slug } = params; // another destructure

  async function getBlog(slug: string) {
    try {
      const res = await fetch(`/api/blog/${slug}`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch blog');
      }

      return res.json();
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
  }

  async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    /*
    Handles form submission by clearing form and appending comment
    */
    e.preventDefault();

    try {
      //get form submission event
      const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>('input[name="name"]');
      const descriptionText = formElement.querySelector<HTMLTextAreaElement>(
        'textarea[name="comment"]'
      );

      // Explicitly cast e.target to HTMLFormElement
      const newComment: IComment = {
        user: nameInput?.value || '',
        comment: descriptionText?.value || '',
        time: new Date(),
      };

      //Add comment to db and update UI
      const response = await fetch(`/api/blog/${slug}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      });

      //clear form data
      if (nameInput) nameInput.value = '';
      if (descriptionText) descriptionText.value = '';

      if (response.status === 200)
        setBlog({
          title: blog?.title || '',
          slug: blog?.slug || '',
          date: blog?.date || new Date(),
          description: blog?.description || '',
          content: blog?.content || '',
          img: blog?.img || '',
          comments: blog ? [...blog.comments, newComment] : [newComment],
        });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBlog(slug).then((blog: IBlog | null) => {
      setBlog(blog);
    });
  }, [slug]);

  return (
    blog && (
      <div>
        <div className={style.centered}>
          <div className={style.post}>
            <h1 className={style.title}>{blog.title}</h1>
            <Image src={blog.img} alt={blog.title} width={600} height={600} />
            <h3 className={style.sub_sub_title}>{parseCommentTime(blog.date)}</h3>
            <p className={style.post_p}>{blog.content}</p>
          </div>
        </div>
        <div className={style.post}>
          <h1 className={style.sub_title}>Comment Section</h1>
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
          <h3 className={style.sub_sub_title}>Leave a Comment!</h3>
          <div className={style.centered}>
            <form className={style.comment_form} onSubmit={handleSumbit}>
              <input name="name" className="name" placeholder="Name"></input>
              <textarea
                name="comment"
                className="comment"
                placeholder="Comment"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  );
}
