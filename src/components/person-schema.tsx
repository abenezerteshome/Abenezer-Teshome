import { profile } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export function PersonSchema() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        jobTitle: ["Software Developer", "Odoo ERP Developer"],
        description:
          "Software Developer and Odoo ERP Developer based in Addis Ababa, Ethiopia, building practical business software and full-stack applications.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Addis Ababa",
          addressCountry: "ET",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: profile.education.institution,
        },
        knowsAbout: [
          "Software development",
          "Odoo ERP",
          "Python",
          "JavaScript",
          "React",
          "SQL",
          "Business process automation",
          "ERP customization",
        ],
        sameAs: [profile.linkedin, profile.github],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: `${profile.name} — Software Developer`,
        url: siteUrl,
        inLanguage: "en",
        about: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
