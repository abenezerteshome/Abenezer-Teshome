import Link from "next/link";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PersonSchema } from "@/components/person-schema";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { experience, profile, skillGroups } from "@/data/portfolio";
import { projects } from "@/data/projects";

const pillars = [
  { icon: <Layers3 size={18} />, label: "ERP & business systems" },
  { icon: <Code2 size={18} />, label: "Full-stack development" },
  { icon: <Database size={18} />, label: "Data & workflows" },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <PersonSchema />
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="availability">
                <span className="availability-dot" />
                <span>Open to meaningful opportunities</span>
              </div>
              <p className="hero-kicker">SOFTWARE DEVELOPER · ODOO ERP</p>
              <h1>
                Software developer
                <span>in Ethiopia.</span>
              </h1>
              <p className="hero-intro">
                I build practical business software and customize Odoo ERP systems.
                Based in Addis Ababa, Ethiopia, I turn real business needs into
                useful, dependable applications.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View my projects <ArrowRight size={16} />
                </a>
                <Link className="button button-secondary" href="/cv">
                  <ArrowDownToLine size={16} /> View & print CV
                </Link>
                <a className="button button-tertiary" href="#contact">Contact me</a>
              </div>
              <div className="hero-contact">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={15} /> {profile.email}
                </a>
                <a href={`tel:${profile.phone}`}><Phone size={15} /> {profile.phone}</a>
                <span><MapPin size={15} /> {profile.location}</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual-wrap" delay={0.12}>
            <div className="hero-visual">
              <div className="hero-visual-grid" />
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />
              <div className="hero-monogram">
                <span className="monogram-eyebrow">SOFTWARE · SYSTEMS · SOLUTIONS</span>
                <span className="monogram-letters">AT</span>
                <span className="monogram-rule" />
                <span className="monogram-name">Abenezer<br />Teshome</span>
              </div>
              <div className="floating-note note-top">
                <span className="note-icon"><Sparkles size={16} /></span>
                <span><b>Business-first</b><small>Thoughtful solutions</small></span>
              </div>
              <div className="floating-note note-bottom">
                <span className="note-check"><Check size={15} /></span>
                <span><b>Built for real work</b><small>From workflows to web apps</small></span>
              </div>
              <span className="visual-coordinate">09°01′N&nbsp; 38°45′E</span>
            </div>
          </Reveal>
        </div>
        <div className="container hero-bottom">
          <span className="hero-bottom-label">A PRACTICAL APPROACH TO</span>
          <div className="hero-pillars">
            {pillars.map(({ icon, label }) => (
              <span className="hero-pillar" key={label}>{icon}{label}</span>
            ))}
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <ArrowDown size={17} />
          </a>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Good software starts with understanding the work."
            description="I bring together technical craft and curiosity about how businesses operate."
          />
          <div className="about-grid">
            <Reveal className="about-story">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal className="education-card" delay={0.08}>
              <span className="card-overline">EDUCATION</span>
              <div className="education-year">{profile.education.year}</div>
              <h3>{profile.education.degree}</h3>
              <p>{profile.education.institution}</p>
              <div className="education-divider" />
              <span className="card-overline">ADDITIONAL TRAINING</span>
              <ul className="training-list">
                {profile.training.map((item) => <li key={item}><Check size={15} />{item}</li>)}
              </ul>
              <p className="education-note">Training listed separately from professional certifications.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="A toolkit for useful, dependable software."
            description="Technologies and practices I use across business systems and full-stack work."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04}>
                <SkillGroup {...group} index={index + 1} />
              </Reveal>
            ))}
          </div>
          <p className="skills-footnote">A practical overview, not a scored list. I keep learning as projects evolve.</p>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects grounded in real needs."
            description="A mix of ERP customization, client applications, and early-stage product ideas."
            action={<Link className="text-link section-action" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></Link>}
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index % 2 === 1 ? 0.08 : 0}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="project-integrity">
            <span className="integrity-mark"><Check size={15} /></span>
            <p>Some work is private or still in development. Project details are shared only at a level appropriate for public viewing.</p>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container experience-layout">
          <div className="experience-intro">
            <p className="eyebrow">EXPERIENCE & EDUCATION</p>
            <h2>Learning by building with people and businesses.</h2>
            <p>Hands-on experience across ERP systems, business workflows, and client-focused software development.</p>
            <Link className="text-link" href="/cv">See my CV <ArrowUpRight size={16} /></Link>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal key={item.organization} delay={index * 0.08}>
                <article className="experience-item">
                  <div className="experience-marker"><span /></div>
                  <div className="experience-content">
                    <div className="experience-meta"><span>{item.period}</span><span>{item.organization}</span></div>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                    <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
            ))}
            <div className="education-inline">
              <div className="experience-marker"><span /></div>
              <div>
                <div className="experience-meta"><span>{profile.education.year}</span><span>Education</span></div>
                <h3>{profile.education.degree}</h3>
                <p>{profile.education.institution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-heading">
            <Reveal>
              <p className="eyebrow eyebrow-light">LET’S BUILD SOMETHING USEFUL</p>
              <h2>Have a project in mind<br />or looking for a developer?</h2>
              <p className="contact-lead">Let’s discuss how I can help turn your ideas into practical software solutions.</p>
              <div className="contact-direct">
                <a href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
                <a href={`tel:${profile.phone}`}><Phone size={16} />{profile.phone}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
              </div>
            </Reveal>
            <Reveal className="contact-form-wrap" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="back-top container">
        <span>THANKS FOR STOPPING BY</span>
        <a href="#home">Back to top <ArrowUpRight size={14} /></a>
      </div>
    </main>
  );
}
