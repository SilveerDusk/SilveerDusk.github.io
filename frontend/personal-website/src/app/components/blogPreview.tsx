import React from 'react';
import style from '@/components/blogPreview.module.css'
import Image from 'next/image';
import type {Blog} from "@/blogData"

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.post}>
      <h3> {props.title} </h3>
      <div>
				<Image src="/imageLinkHere" alt="img" width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
	  </div>
  );
}

