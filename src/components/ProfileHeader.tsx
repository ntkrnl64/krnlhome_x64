import {
  Avatar,
  Title1,
  Body1,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    animation: "fadeInDown 0.6s ease-out",
  },
  avatarContainer: {
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      inset: "-4px",
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${tokens.colorBrandBackground}, ${tokens.colorBrandBackground2})`,
      opacity: 0.3,
      animation: "pulse 2s ease-in-out infinite",
    },
  },
  avatar: {
    position: "relative",
    border: `4px solid ${tokens.colorNeutralBackground1}`,
    boxShadow: tokens.shadow16,
  },
  title: {
    marginTop: "0.5rem",
    textAlign: "center",
  },
  bio: {
    textAlign: "center",
    color: tokens.colorNeutralForeground2,
    maxWidth: "400px",
  },
});

export const ProfileHeader = () => {
  const styles = useStyles();
  const avatarUrl = "https://assets.krnl64.win/avatar.png";

  return (
    <div className={styles.header}>
      <div className={styles.avatarContainer}>
        <Avatar
          className={styles.avatar}
          image={{ src: avatarUrl }}
          size={96}
          name="NtKrnl64"
        />
      </div>
      <Title1 className={styles.title}>NtKrnl64</Title1>
      <Body1 className={styles.bio}>开发者 | 创造者 | 终身学习者</Body1>
    </div>
  );
};
