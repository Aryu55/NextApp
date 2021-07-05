import AllPosts from "../../components/posts/all-post.jsx"
import { getAllPosts } from "../../lib/posts-util"
import Head from "next/head"
import { Fragment } from "react"
const AllPostsPage = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="a list of all posts"></meta>
            </Head>
            <AllPosts posts={posts} ></AllPosts>
        </Fragment>
    )
}

export function getStaticProps() {
    const posts = getAllPosts()

    return {
        props: {
            posts
        }
    }
}

export default AllPostsPage
