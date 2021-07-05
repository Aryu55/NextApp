import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postDir = path.join(process.cwd(), "posts")

export function getPostFiles(){
     return fs.readdirSync(postDir)
}

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, '') //remove the extension
    const filePath = path.join(postDir, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}

export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postDir)

    const allPosts = postFiles.map(file => {
        return getPostData(file)
    })
    const sortedPosts = allPosts.sort((PostA, PostB) => PostA.date > PostB.date ? -1 : 1)
    return sortedPosts

}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}