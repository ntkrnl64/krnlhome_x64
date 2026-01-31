import {
  Card,
  CardHeader,
  CardFooter,
  Text,
  Button,
  Badge,
  makeStyles,
  tokens,
  TagGroup,
  Tag,
} from "@fluentui/react-components";
import {
  Open24Regular,
  Code24Regular,
  Star24Filled,
  Clock24Regular,
  Archive24Regular,
  Beaker24Regular,
} from "@fluentui/react-icons";
import type { Project, ProjectStatus } from "../constants/projects";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // 关键：应用 LinkItem 的颜色变化样式，但去除位移
    transition: "background-color 0.2s ease",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover, // 鼠标悬停变色
    },
  },
  header: { marginBottom: "0.5rem" },
  description: {
    marginBottom: "1rem",
    color: tokens.colorNeutralForeground2,
    flexGrow: 1, // 让内容撑开，保证底部按钮对齐
  },
  tags: { marginBottom: "1rem", flexWrap: "wrap" },
  footer: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.5rem",
  },
});

const StatusIcon = ({ status }: { status: ProjectStatus }) => {
  switch (status) {
    case "Active":
      return <Star24Filled color={tokens.colorPaletteYellowBorderActive} />;
    case "Archived":
      return <Archive24Regular color={tokens.colorNeutralForeground3} />;
    case "WIP":
      return <Beaker24Regular color={tokens.colorPaletteRedBorderActive} />;
    case "Maintenance":
      return <Clock24Regular color={tokens.colorPaletteBlueBorderActive} />;
    default:
      return null;
  }
};

const getStatusColor = (status: ProjectStatus) => {
  switch (status) {
    case "Active":
      return "success";
    case "Archived":
      return "informative";
    case "WIP":
      return "danger";
    case "Maintenance":
      return "important";
    default:
      return "brand";
  }
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <Text weight="semibold" size={500}>
            {project.title}
          </Text>
        }
        action={
          <Badge
            appearance="tint"
            color={getStatusColor(project.status)}
            icon={<StatusIcon status={project.status} />}
          >
            {project.status}
          </Badge>
        }
        className={styles.header}
      />

      <Text className={styles.description}>{project.description}</Text>

      <TagGroup className={styles.tags}>
        {project.tags.map((tag) => (
          <Tag key={tag} size="small" shape="circular" appearance="brand">
            {tag}
          </Tag>
        ))}
      </TagGroup>

      <CardFooter className={styles.footer}>
        {project.repoUrl && (
          <Button
            icon={<Code24Regular />}
            appearance="subtle"
            onClick={() => window.open(project.repoUrl, "_blank")}
          >
            Source
          </Button>
        )}
        {project.demoUrl && (
          <Button
            icon={<Open24Regular />}
            appearance="primary"
            onClick={() => window.open(project.demoUrl, "_blank")}
          >
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
