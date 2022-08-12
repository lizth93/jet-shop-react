import { useSelector } from "react-redux";
//own
import Spinner from "components/spinner/spinner.styled";
import Error from "components/error";
import UserIcon from "Icons/user";

const Comments = (props) => {
  const { isLoadingComments, productComments } = useSelector((state) => ({
    isLoadingComments: state.itemsProducts.isLoadingComments,
    productComments: state.itemsProducts.productComments,
  }));

  if (isLoadingComments) {
    return <Spinner />;
  }

  return (
    <div className={props.className}>
      <h2 className="heading--2">Comments</h2>
      {!productComments && (
        <Error>Error loading the comments, please try again!</Error>
      )}
      <ul className="container">
        {productComments.comments.map((comment) => (
          <li className="comment" key={comment.id}>
            <div className="comment_description">
              <UserIcon />
              <div>
                <h2 className="comment_user">
                  User:{" "}
                  <strong className="comment_user_name">
                    {comment.user.username}
                  </strong>
                </h2>
                <p className="comment_text">{comment.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
