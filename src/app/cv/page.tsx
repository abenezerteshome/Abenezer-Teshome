import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { experience, profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "View and print Abenezer Teshome's software development CV.",
  alternates: {
    canonical: "/cv",
  },
};

export default function CvPage() {
  return (
    <main id="main-content" className="cv-page">
      <div className="container cv-toolbar">
        <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to portfolio</Link>
        <PrintButton />
      </div>
      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <p className="eyebrow">CURRICULUM VITAE</p>
            <h1>{profile.name}</h1>
            <p className="cv-title">{profile.title} <span>·</span> Odoo ERP Developer</p>
          </div>
          <div className="cv-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </header>
        <section className="cv-section">
          <h2>Professional profile</h2>
          <p>{profile.about[0]} {profile.about[1]}</p>
        </section>
        <section className="cv-section">
          <h2>Experience</h2>
          {experience.map((item) => (
            <div className="cv-experience" key={item.organization}>
              <div className="cv-experience-heading">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>
              <p className="cv-org">{item.organization}</p>
              <p>{item.description}</p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          ))}
        </section>
        <section className="cv-section">
          <h2>Education & training</h2>
          <div className="cv-experience">
            <div className="cv-experience-heading">
              <h3>{profile.education.degree}</h3><span>{profile.education.year}</span>
            </div>
            <p className="cv-org">{profile.education.institution}</p>
          </div>
          <ul>{profile.training.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="cv-note">Training is listed separately and is not represented as professional certification.</p>
        </section>
        <section className="cv-section">
          <h2>Technical skills</h2>
          <div className="cv-skills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="cv-foot">Prepared from information supplied by Abenezer Teshome.</footer>
      </article>
      <p className="cv-help">Use your browser’s print dialog and choose “Save as PDF.” An original CV PDF was not included with the supplied materials.</p>
    </main>
  );
}
