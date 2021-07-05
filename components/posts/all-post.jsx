import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid.jsx";

const AllPosts = ({posts}) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts}></PostGrid>
    </section>
  );
};

export default AllPosts;
