import React from "react";
function Layout({ children }) {
  return (
    <div>
      <div className="routes">{children}</div>
    </div>
  );
}

export default Layout;
