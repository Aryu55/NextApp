import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const postitem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const imagePath = `/images/posts/${slug}/${image}`

  return (
    <ul>
      <li className={classes.post}>
        <Link>
          <a>
            <div className={classes.image}>
              <Image src={imagePath} alt={title} width={300} height={300}></Image>
            </div>
            <div className={classes.content}>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default postitem;
