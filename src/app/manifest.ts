import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tanmay Tambat — Software Engineer",
    short_name: "Tanmay",
    description:
      "Software Engineering Intern at Josh Software. Full-stack developer. SIH 2024 National Winner.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
