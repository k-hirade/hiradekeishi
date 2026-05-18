import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
