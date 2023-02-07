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
   const article = getArticle(id)

   return {
    props: {
      article
    }
   }
}
