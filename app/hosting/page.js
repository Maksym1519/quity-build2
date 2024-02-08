import h from "./hostingPage.module.scss";
import Deploy from "./deploy/deploy";
import Terms from "./deploy/terms/terms";
import Earn from "./earn/earn";
import Cases from "./cases/cases";

export default function HostingPage() {
  return (
    <>
      <div className={h.wrapper}>
        <div className="container">
          <Deploy />
          <Terms />
          <Earn />
          <Cases />
        </div>
      </div>
    </>
  );
}
