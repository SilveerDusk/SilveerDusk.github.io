import blogs from '@/blogData';
import BlogPreview from '@/components/blogPreview';
import Image from 'next/image';

export default function Blogs() {
  return (<div>
			<div className="centered">
        <div className="post">
          <h1 className="title">Dinner Date with My Bestie</h1>
          <Image src="/dinnerdate.jpg" alt="Dinner Date" width={600} height={600}/>
          <h3 className="sub-sub-title">10/23/23</h3>
          <p className="post_p">This is my best friend Xavier. Even though we only see each other in person like three times a year we are always on the phone calling over the most random things.
            This day in partical we decided to go to IKEA together and then cook up lunch at my house. It was my first time going to IKEA so it was an experience. We had Baked Salmon, Avacado Toast, and Smooties.
          </p>
        </div>
      </div>
			</div>) 
}