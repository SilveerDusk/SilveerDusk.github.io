import style from '@/resume/page.module.css'

export default function Resume() {
  return (<div>
			<div className={style.centered}>
        <h1 className={style.title}><a href="/2024CSResume.pdf">My Resume</a></h1>
        <embed src="/2024CSResume.pdf" type="application/pdf" width="70%" height="1550px"></embed>
      </div>
			</div>) 
}