import { IComment } from '@/database/blogSchema';
import style from '@/components/comments/comment.module.css';

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
  comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
  Makes your code look nicer and allows for better readability.
*/}
function parseCommentTime(time: Date){
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
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
  });
  return formattedDate;
}


function Comment({ comment }: CommentProps) {
  return (
    <div className={style.centered}>
      <div className={style.top}>
        <h3 className={style.user}>{comment.user}</h3>
        <span className={style.time}>{parseCommentTime(comment.time)}</span>
      </div>
      <div className={style.bottom}>
        <p className={style.text}>{comment.comment}</p>
      </div>
    </div>

  );
}

export default Comment;