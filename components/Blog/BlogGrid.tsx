import Image from "next/image";

type ComponentProps = {
  articles: Article[];
};

const BlogGrid = ({ articles }: ComponentProps) => {

console.log({articles})

  return (
    <article className="mt-24 w-full">
      <h2 className="text-slate-600 font-medium text-center text-md lg:text-lg max-w-[70ch] mx-auto">
        Come here to learn about the newest web development and digital
        marketing trends and technologies that can help elevate your brand
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="w-full rounded-lg overflow-hidden" key={article.id}>
            <div className="relative isolate">
              <Image
                src={
                  article.attributes.main_image.data.attributes.formats.large
                    .url
                }
                width={
                  article.attributes.main_image.data.attributes.formats.large
                    .width
                }
                height={
                  article.attributes.main_image.data.attributes.formats.large
                    .height
                }
                alt={article.attributes.main_image.data.attributes.name}
                className="aspect-video object-cover w-full rounded-lg"
              />
              <span className="p-4 text-md font-medium text-slate-600 bg-white rounded-lg absolute bottom-3 left-3">
                {article.attributes.category}
              </span>
            </div>
            <h3 className="line-clamp-1 text-lg font-medium text-slate-700 mt-2">
              {article.attributes.title}
            </h3>

            <p className="text-sm line-clamp-2 text-slate-500 mt-2">{article.attributes.excerpt}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
export default BlogGrid;
