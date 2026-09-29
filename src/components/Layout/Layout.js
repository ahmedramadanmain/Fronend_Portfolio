import { Outlet } from "react-router-dom";
import "./Layout.scss";
function Layout() {
  return (
    <>
      <div className="layout">
        <span className="tags top-tags">&lt;body&lg;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&lg;
          <br />
          <span className="bottom-tags-html">&lt;/html&lg;</span>
        </span>
      </div>
    </>
  );
}

export default Layout;
