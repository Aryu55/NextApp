import PostItem from "./post-item.jsx";
import classes from "./posts-grid.module.css";

const postsgrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem></PostItem>
      ))}
    </ul>
  );
};

export default postsgrid;
