
import Image from "next/image";
import Link from "next/link";
import Projects from "../WebDesign/Projects";

const marketingServices = [
  {
    title: "Google Ads",
    details:
      "With Google Ads, we can help you display your ads on Google and its advertising network, reaching people who are searching for keywords related to your business. This can help you drive more traffic to your website and generate leads and sales.",
    image: "/images/google-ads.jpeg",
  },
  {
    title: "Facebook Ads",
    details:
      "With Facebook Ads, we can help you display your ads on the Facebook platform and its network of partner websites and apps. This allows you to target specific audiences based on demographics, interests, and behaviors, and promote your products or services to people who are most likely to be interested in what you have to offer.",
    image: "/images/facebook-3d.jpeg",
  },
  {
    title: "Instagram Ads",
    details:
      "With Instagram Ads, we can help you display your ads on the Instagram platform, reaching a large audience and increasing engagement with your brand. This can help you increase brand awareness, drive traffic to your website, and generate leads and sales.",
    image: "/images/instagram-3d.jpeg",
  },
];

const DigitalMarketingServices = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {marketingServices.map((project, i) => (
          <div key={i} className="w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              width={700}
              height={640}
              alt={project.image}
              className="w-full aspect-video object-cover"
            />
            <div className="w-full h-full bg-light-peach/20 text-center p-8">
              <h3 className="text-peach tracking-wider font-medium uppercase text-2xl">
                {project.title}
              </h3>
              <p className="text-lg">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/images/analytics.jpeg"
            width={3000}
            height={2000}
            alt="Website Analytics"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
              Website Analytics
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/website-analytics"
                className="text-white text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>

            </span>
          </div>
        </div>
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/images/digital-marketing.jpeg"
            width={3000}
            height={2000}
            alt="Web Design"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
              Web Design
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/web-development"
                className="text-white text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DigitalMarketingServices;
