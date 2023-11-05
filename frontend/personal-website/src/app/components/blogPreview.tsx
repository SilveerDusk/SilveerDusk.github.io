import React from 'react';
import style from '@/components/blogPreview.module.css'
import Image from 'next/image';
import type {Blog} from "@/blogData"
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
      <div className={style.post}>
        <div className={style.top}>
          <h2 className={style.top_h2}> {props.title} </h2>
          <h3 className={style.top_h3}>{props.date}</h3>
        </div>
        <div className={style.bottom}>
          <p className={style.post_p}>{props.description}</p>
          <Link className={style.post_a} href={props.slug}>Read More</Link>
        </div>
	    </div>
  );
}

