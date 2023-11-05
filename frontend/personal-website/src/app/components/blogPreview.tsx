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
      <div>
        <h3> {props.title} </h3>
				<p>{props.date}</p>
      </div>
      <div>
        <p>{props.description}</p>
        <Link href={`/${props.slug}`}>Read More</Link>
      </div>
	  </div>
  );
}

