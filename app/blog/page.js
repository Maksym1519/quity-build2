import b from "./blog.module.scss";
//components------------------------------------------
import BlogNavigation from "./navigation/blogNavigation";
import News from "./news/news";

export default function Blog() {
  return (
    <>
      <div className={b.wrapper}>
        <div className="container">
          <BlogNavigation />
          <News />
        </div>
      </div>
    </>
  );
}
