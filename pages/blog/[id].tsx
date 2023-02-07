import React from 'react'
import { getArticle } from '../../helpers/getArticles'
import ReactMarkdown from "react-markdown";
import Image from 'next/image';

type ComponentProps = {
  blog: Article;
};

const BlogArticle = ({blog}:ComponentProps) => {

console.log({blog})
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 text-slate-700 mb-6">
        <div className="flex gap-4 mb-4">
          <Image
            src={blog.attributes.main_image.data.attributes.formats.large.url}
            width={
              blog.attributes.main_image.data.attributes.formats.large.width
            }
            height={
              blog.attributes.main_image.data.attributes.formats.large.height
            }
            alt={blog.attributes.main_image.data.attributes.name}
            className="w-full sm:w-2/3 md:w-1/2 aspect-video"
          />{" "}
          <h1 className=" text-xl md:text-3xl font-bold">
            {blog.attributes.title}
          </h1>
        </div>

        <ReactMarkdown children={blog.attributes.body} />
      </div>
    </main>
  );
}

export default BlogArticle


 export const getStaticPaths = async () => {
   const res = await fetch(
     "https://momentous-wacky-advice.strapiapp.com/api/blogs?populate=*"
   );
   const { data: articles } = await res.json();

   const paths = articles.map((article: Article) => {
     return {
       params: {
         id: article.id.toString(),
       },
     };
   });

   return {
     paths,
     fallback: false,
   };
 };


    export const getStaticProps = async ({ params : {id}}: { params: {id: string}}) => {

      const res = await fetch(
        `https://momentous-wacky-advice.strapiapp.com/api/blogs/${id}?populate=*`
      );
      const { data: blog } = await res.json();

      return {
        props: { blog },
        revalidate: 1,
      };
    };
