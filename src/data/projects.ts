export type ProjectStatus =
  | "Professional work"
  | "Private client project"
  | "Concept / In development"
  | "Client project / In development";

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  highlights: string[];
  context: string;
  visual: "fleet" | "guesthouse" | "inventory" | "abrobet" | "adpms";
};

export const projects: Project[] = [
  {
    slug: "hagbes-fleet-management",
    number: "01",
    title: "HAGBES Fleet Management System",
    shortTitle: "Fleet management",
    category: "Odoo ERP · Fleet operations",
    description:
      "An internal fleet management solution developed through Odoo customization to support vehicle requests, approvals, assignments, and day-to-day fleet administration.",
    status: "Professional work",
    technologies: ["Odoo 18", "Python", "PostgreSQL", "XML"],
    highlights: [
      "Vehicle request management",
      "Approval workflows",
      "Vehicle and driver assignment",
      "Fleet administration and reporting",
    ],
    context:
      "Organizational work is presented at a high level only. Internal company information, private records, credentials, and non-public screenshots are intentionally excluded.",
    visual: "fleet",
  },
  {
    slug: "guest-house-management",
    number: "02",
    title: "Guest House Management System",
    shortTitle: "Guest house management",
    category: "Full-stack development · Private client",
    description:
      "A business application developed for a private client to support guesthouse management operations.",
    status: "Private client project",
    technologies: [],
    highlights: [
      "Guesthouse management operations",
      "Business application development",
    ],
    context:
      "The public project summary is limited to confirmed information. Specific features, technical tools, challenges, and screenshots can be added when they are verified and approved for sharing.",
    visual: "guesthouse",
  },
  {
    slug: "spare-parts-sales-inventory",
    number: "03",
    title: "Central Spare Parts Sales & Inventory System",
    shortTitle: "Sales & inventory",
    category: "Business application · Private client",
    description:
      "A business management application developed for a private client to support spare-parts sales and inventory operations.",
    status: "Private client project",
    technologies: [],
    highlights: [
      "Sales management",
      "Inventory management",
      "Product management",
      "Business workflow support",
    ],
    context:
      "Only confirmed project scope is shown here. Implementation details, technology choices, and outcomes are not inferred where they have not been provided.",
    visual: "inventory",
  },
  {
    slug: "abrobet",
    number: "04",
    title: "Abrobet",
    shortTitle: "Abrobet",
    category: "Product concept · Addis Ababa",
    description:
      "An independent product concept exploring how people can find suitable roommates and shared accommodation in Addis Ababa.",
    status: "Concept / In development",
    technologies: [],
    highlights: [
      "Roommate discovery vision",
      "Shared accommodation focus",
      "Designed around Addis Ababa",
    ],
    context:
      "Abrobet is a concept in development. This page presents the product vision only and does not imply that planned functionality has been delivered.",
    visual: "abrobet",
  },
  {
    slug: "adpms",
    number: "05",
    title: "Architectural Design Progress Management System",
    shortTitle: "ADPMS",
    category: "Client project · Platform concept",
    description:
      "A platform concept for documenting, evaluating, monitoring, and visualizing architectural design progress from site investigation through construction documentation.",
    status: "Client project / In development",
    technologies: [],
    highlights: [
      "Design progress documentation",
      "Evaluation and monitoring",
      "Progress visualization",
      "Stages from site investigation to construction documentation",
    ],
    context:
      "The system is presented as a concept / in-development project. This overview does not claim that the complete platform has been delivered.",
    visual: "adpms",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
