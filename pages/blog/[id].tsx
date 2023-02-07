import React from 'react'
import { getArticle } from '../../helpers/getArticles'

type ComponentProps = {
  article: Article;
};

const BlogArticle = ({article}:ComponentProps) => {

  console.log(article)

  return (
    <div>Blog Article</div>
  )
}

export default BlogArticle


async function getServerSideProps({params: {id}}:{params: {id:string}}) {

  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

   const response =  await fetch(`${url}/api/blogs/${id}?populate=*`)

   const article = response.json()

   return {
    props: {
      article
    }
   }
}
