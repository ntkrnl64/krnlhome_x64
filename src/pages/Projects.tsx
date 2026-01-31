import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  makeStyles,
  Button,
  Title2,
  Text,
  Input,
  tokens,
  TabList,
  Tab,
} from "@fluentui/react-components";
import { ArrowLeft24Regular, Search24Regular } from "@fluentui/react-icons";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS, type ProjectStatus } from "../constants/projects";

const useStyles = makeStyles({
  container: {
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    animation: "fadeIn 0.5s ease-out",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "@media (min-width: 600px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  emptyState: {
    textAlign: "center",
    padding: "3rem",
    color: tokens.colorNeutralForeground3,
  },
});

export const Projects = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"All" | ProjectStatus>("All");
  const [search, setSearch] = useState("");

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesStatus = filter === "All" || p.status === filter;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <Button
          icon={<ArrowLeft24Regular />}
          appearance="subtle"
          onClick={() => navigate("/")}
        />
        <Title2>Projects</Title2>
      </div>

      <div className={styles.controls}>
        <TabList
          selectedValue={filter}
          onTabSelect={(_, data) => setFilter(data.value as any)}
        >
          <Tab value="All">All</Tab>
          <Tab value="Active">Active</Tab>
          <Tab value="Maintenance">Maintenance</Tab>
          <Tab value="WIP">WIP</Tab>
          <Tab value="Archived">Archived</Tab>
        </TabList>
        <Input
          contentBefore={<Search24Regular />}
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <Text size={400}>No projects found matching your criteria.</Text>
        </div>
      )}
    </div>
  );
};
