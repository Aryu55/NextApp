import PostItem from "./post-item.jsx";
import classes from "./posts-grid.module.css";

const postsgrid = ({ posts }) => {
    console.log(posts)
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug}></PostItem>
      ))}
    </ul>
  );
};

export default postsgrid;
