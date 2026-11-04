import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  Home,
  Package,
  Users,
} from "lucide-react";
import type { Project } from "@/data/projects";

const visualContent = {
  fleet: {
    icon: <ClipboardList size={17} />,
    label: "Fleet overview",
    stat: "Operations",
    rows: ["Vehicle requests", "Assignments", "Approvals"],
  },
  guesthouse: {
    icon: <Home size={17} />,
    label: "Guest house",
    stat: "Hospitality",
    rows: ["Guest services", "Daily operations", "Management"],
  },
  inventory: {
    icon: <Package size={17} />,
    label: "Sales & inventory",
    stat: "Business",
    rows: ["Products", "Sales", "Stock"],
  },
  abrobet: {
    icon: <Users size={17} />,
    label: "Find your place",
    stat: "Addis Ababa",
    rows: ["Shared living", "Roommate discovery", "A product vision"],
  },
  adpms: {
    icon: <Building2 size={17} />,
    label: "Project progress",
    stat: "Design → delivery",
    rows: ["Site investigation", "Design development", "Documentation"],
  },
};

export function ProjectArt({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const content = visualContent[project.visual];

  return (
    <div
      className={`project-art project-art-${project.visual}${compact ? " is-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="art-window">
        <div className="art-topbar">
          <span className="art-symbol">{content.icon}</span>
          <span className="art-label">{content.label}</span>
          <span className="art-dots"><i /><i /><i /></span>
        </div>
        <div className="art-body">
          <div className="art-sidebar"><b /><i /><i /><i /></div>
          <div className="art-content">
            <div className="art-content-heading">
              <span>{content.stat}</span>
              <span className="art-open"><ArrowUpRight size={13} /></span>
            </div>
            <div className="art-summary">
              <span />
              <span />
              <span />
            </div>
            <div className="art-list">
              {content.rows.map((row, index) => (
                <div className="art-list-row" key={row}>
                  <span className="art-row-icon">{index + 1}</span>
                  <span className="art-row-text">{row}</span>
                  <span className="art-row-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!compact ? <span className="art-caption">{project.number} / 05</span> : null}
    </div>
  );
}
