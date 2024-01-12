import b from "./blog.module.scss";
//components------------------------------------------
import News from "./news/news";


export default function Blog() {
  
  return (
    <>
      <div className={b.wrapper}>
        <div className="container">
          <News />
          </div>
      </div>
    </>
  );
}
