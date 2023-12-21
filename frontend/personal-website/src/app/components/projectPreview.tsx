import React from 'react';
import Link from 'next/link';
import { IProject } from '@/database/portfolioSchema';
import Image from 'next/image';
import style from '@/components/projectPreview.module.css';

export default async function ProjectPreview(props: IProject) {
  return (
    <>
      <div className={style.project}>
        <div key={props.title}>
          <a href={`portfolio/${props.slug}`}>
            <Image
              className={style.project_img}
              src={props.img}
              alt="Photo of the Project"
              width={700}
              height={700}
            />
          </a>
        </div>
        <div className={style.project_details}>
          <h3 className={style.project_title}>{props.title}</h3>
          <p className="project_description">{props.description}</p>
          <Link className={style.project_link} href={`portfolio/${props.slug}`}>
            Learn More!
          </Link>
        </div>
      </div>
    </>
  );
}
