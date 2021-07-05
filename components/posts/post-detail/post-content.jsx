import PostHeader from "./post-header.jsx";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PrismLight } from "react-syntax-highlighter";
import atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
import Image from "next/image";

PrismLight.registerLanguage("js", js)
PrismLight.registerLanguage("css",css)

const postcontent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     ></Image>
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            ></Image>
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <PrismLight style={atomDark} language={language} children={value}></PrismLight>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown renderer={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default postcontent;
