'use client';
import Image from 'next/image';
import Comment from '@/components/comment';
import React, { useState, useEffect } from 'react';
import { IProject, IComment } from '@/database/portfolioSchema';

type IParams = {
  params: {
      slug: string
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

export default function Project({ params }: IParams) {
  const [project, setProject] = useState<IProject | null>(null);
	const { slug } = params // another destructure


  async function getProject(slug: string) {
    try {
      const res = await fetch(`/api/portfolio/${slug}`, {
        cache: "no-store",	
      })

      if (!res.ok) {
        throw new Error("Failed to fetch project");
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
          formElement.querySelector<HTMLInputElement>(
            'input[name="name"]'
          );
        const descriptionText =
          formElement.querySelector<HTMLTextAreaElement>(
            'textarea[name="comment"]'
          );

        // Explicitly cast e.target to HTMLFormElement
        const newComment: IComment = {
          user: nameInput?.value || "",
          comment: descriptionText?.value || "",
          time: new Date(),
        };

        //Add comment to db and update UI
        const response = await fetch(
          `/api/portfolio/${slug}/comment`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(newComment),
          });

        
        //clear form data
        if (nameInput) nameInput.value = "";
        if (descriptionText) descriptionText.value = "";

        if (response.status === 200)
          setProject({
            title: project?.title || "",
            slug: project?.slug || "",
            description: project?.description || "",
            content: project?.content || "",
            img: project?.img || "",
            github: project?.github || "",
            comments: project
              ? [...project.comments, newComment]
              : [newComment],
          });
    } catch (err) {
      console.error(err);
    }
    
  }

  useEffect(() => {
    getProject(slug).then((project: IProject | null) => {
      setProject(project);
    });
  }, [slug]);

  return (project && <div>
    <div className="centered">
      <div className="post">
        <h1 className="title">{project.title}</h1>
        <Image src={project.img} alt={project.title} width={600} height={600}/>
        <p className="post_p">{project.content}</p>
      </div>
    </div>
    <div className='post'>
      <h1 className="sub-title">Comment Section</h1>
      {project.comments.map((comment: IComment, index: number) => (
	      <Comment key={index} comment={comment} />
	    ))}
      <h3 className='sub-sub-title'>Leave a Comment!</h3>
      <div className='centered'>
        <form className='comment-form' onSubmit={handleSumbit}>
          <input name="name" className='name' placeholder='Name'></input>
          <textarea name="comment" className='comment' placeholder="Comment" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </div>
  )
}
