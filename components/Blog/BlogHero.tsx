import Image from "next/image";

const BlogHero = () => {
  return <section className="relative isolate">
    <Image src="/images/blog.jpg" width={1920} height={1133} alt="Blog" className="w-full aspect-[3/1] rounded-lg shadow-md mt-4 object-cover"  />
    <div className="hidden md:flex bg-slate-50 shadow-md p-4 justify-center items-center rounded-md absolute -bottom-5 left-5">
      <h1 className="text-slate-700 text-3xl font-bold">Athena Media Blog</h1>
    </div>
  </section>;
};
export default BlogHero;
