import React from 'react';
import style from '@/components/blogPreview.module.css'
import Link from 'next/link';
import { IBlog } from '@/database/blogSchema';



export default async function BlogPreview(props: IBlog) {
  return (
    <>
        <div className={style.post}>
          <div key={props.title}>
            <div className={style.top}>
            <h2 className={style.top_h2}> {props.title} </h2>
            <h3 className={style.top_h3}>{props.date.toDateString()}</h3>
          </div>
          <div className={style.bottom}>
            <p className={style.post_p}>{props.description}</p>
            <Link className={style.post_a} href={`blog/${props.slug}`}>Read More</Link>
          </div>
          </div>
	      </div>
    </>
  );
}

