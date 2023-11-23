import blogs from '@/blogData';
import BlogPreview from '@/components/blogPreview';
import Image from 'next/image';

export default function Blogs() {
  return (<div>
			<div className="centered">
        <div className="post">
          <h1 className="title">My Cats</h1>
          <Image src="/cats.JPG" alt="Cats" width={600} height={600}/>
          <h3 className="sub-sub-title">10/23/23</h3>
          <p className="post_p">Meet two of my Cats! These are the friendly ones. on the right taking a sniff of my bagel is sandstorm, who is the father figure of the bunch. and on the left is Domino the dumb adopted child. I love them both dearly</p>
        </div>
      </div>
			</div>) 
}