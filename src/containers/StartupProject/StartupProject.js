import React, { useContext, useEffect, useState } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchGitHubFolderContents() {
      try {
        // Fetch the contents of the 'projects' folder from the GitHub API
        const response = await fetch(
          "https://api.github.com/repos/iamkjn/iamkjn/contents/projects"
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();

        // Format the data to display in cards
        const formattedProjects = data
          .filter((item) => item.type === "dir") // Only include directories
          .map((item) => ({
            projectName: item.name,
            projectDesc: "Click to view the project folder on GitHub.", // Placeholder description
            footerLink: [
              {
                name: "View Folder",
                url: item.html_url,
              },
            ],
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching GitHub folder contents:", error);
      }
    }

    fetchGitHubFolderContents();
  }, []);

  if (projects.length === 0) {
    return   <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
    Have a Look at my projects on GitHub!{" "}
    <a
      href="https://github.com/iamkjn"
      target="_blank"
      rel="noreferrer"
    >
      @iamkjn
    </a>
  </p>;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">Projects</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            Explore my hands-on demo projects showcasing practical applications of cloud technologies.
          </p>

          <div className="projects-container">
            {projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                <div className="project-detail">
                  <h5
                    className={
                      isDark ? "dark-mode card-title" : "card-title"
                    }
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => (
                        <span
                          key={i}
                          className={
                            isDark
                              ? "dark-mode project-tag"
                              : "project-tag"
                          }
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}