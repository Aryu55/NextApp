import classes from "./featured-post.module.css";
import PostGrid from "../posts/posts-grid.jsx";

const featuredpost = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <PostGrid posts={posts}></PostGrid>
    </section>
  );
};

export default featuredpost;
