import { ArrowUpRight } from "lucide-react";

export function SkillGroup({
  title,
  description,
  skills,
  index,
}: {
  title: string;
  description: string;
  skills: string[];
  index: number;
}) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <span className="skill-index">0{index}</span>
        <ArrowUpRight size={18} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="skill-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  );
}
