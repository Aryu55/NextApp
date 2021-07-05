import PostContent from "../../components/posts/post-detail/post-content.jsx"
import { getPostData, getPostFiles } from "../../lib/posts-util"
import Head from "next/head"
import { Fragment } from "react"
const SinglePostPage = ({ postData }) => {
    return (
        <Fragment>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.excerpt}></meta>
            </Head>
            <PostContent post={postData}></PostContent>
        </Fragment>
    )  
}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    const postData = getPostData(slug)

    return {
        props: {
            postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const filename = getPostFiles()
    const slugs = filename.map(filename => filename.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default SinglePostPage
