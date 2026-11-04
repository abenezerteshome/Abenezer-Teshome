import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">AT</span>
            <span className="brand-name">Abenezer Teshome</span>
          </Link>
          <p>Thoughtful software for real-world work.</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Abenezer Teshome</span>
        <span>Designed with clarity and care.</span>
      </div>
    </footer>
  );
}
