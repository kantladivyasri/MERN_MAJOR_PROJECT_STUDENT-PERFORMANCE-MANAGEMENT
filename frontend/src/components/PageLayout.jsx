import Navbar from "./Navbar";

function PageLayout({ title, subtitle, children, showNavbar = true }) {
  return (
    <div className="app-shell">
      {showNavbar && <Navbar />}

      <main className="container py-5">
        {title && (
          <div className="page-header mb-4 text-center">
            <h1 className="display-5 fw-bold">{title}</h1>
            {subtitle && <p className="text-muted">{subtitle}</p>}
          </div>
        )}

        {children}
      </main>
    </div>
  );
}

export default PageLayout;
