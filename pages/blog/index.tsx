import Head from "next/head";
import { Fragment } from "react";
import BlogGrid from "../../components/Blog/BlogGrid";
import BlogHero from "../../components/Blog/BlogHero";
import getArticles from "../../helpers/getArticles";

type ComponentProps = {
  articles: Article[];
};


const Blog = ({articles}:ComponentProps) => {

console.log({ articles });

  return (
    <Fragment>
      <Head>
        <title>Blog | Athena Media</title>
        <meta
          name="description"
          content="Learn more about Athena Media, a leading provider of web development, digital marketing and advertising services."
        />
        <meta
          name="keywords"
          content="Athena Media, Blog, web development, digital marketing, advertising"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Athena Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Blog | Athena Media" />
        <meta
          property="og:description"
          content="Learn more about web development and digital marketing by following our blog articles and get ideas to improve you knowledge."
        />
        <meta
          property="og:image"
          content="https://www.athenamedia.co.za/assets/images/analytics.jpeg"
        />
        <meta property="og:url" content="https://www.athenamedia.co.za/blog" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Athena Media",
              url: "https://www.athenamedia.co.za/blog",
              logo: "https://www.athenamedia.co.za/images/analytics.jpeg",
              contactPoint: {
                "@type": "ContactPoint",

                contactType: "customer service",
                email: "info@athenamedia.co.za",
              },
            }),
          }}
        />
      </Head>
      <main className="max-w-7xl mx-auto mb-20 px-4 lg:px-0">
        <BlogHero />
        <BlogGrid articles={articles} />

      </main>
    </Fragment>
  );
};
export default Blog;


export async function getServerSideProps() {

  const {data} = await getArticles();



  return {
    props: {
      articles: data
    }
  }

}
