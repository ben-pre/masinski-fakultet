import About from "@/components/About";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O fakultetu - Mašinski fakultet Sarajevo",
  description: "",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <About />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
