import { Fragment } from 'react'
import Head from "next/head"
import Hero from '../components/home-page/hero.jsx'
import FeaturedPost from "../components/home-page/featured-post.jsx"
// import img from "../public/images/site/aryu.jpg"
import { getFeaturedPosts } from "../lib/posts-util"

const index = ({featuredPosts}) => {
  return (
    <Fragment>
      <Head>
        <title>Aryan's Blog</title>
        <meta name="description" content="I post about programming and web development"></meta>
      </Head>
      <Hero></Hero>
      <FeaturedPost posts={featuredPosts}></FeaturedPost>
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      featuredPosts
    },
    revalidate: 60
  }
}

export default index
