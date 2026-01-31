import { useNavigate } from "react-router-dom";
import { Button, makeStyles } from "@fluentui/react-components";
import {
  Mail24Regular,
  LockClosed24Regular,
  Heart24Regular,
  Briefcase24Regular,
} from "@fluentui/react-icons";
import { ProfileHeader } from "../components/ProfileHeader";
import { LinkItem } from "../components/LinkItem";
import { SOCIAL_LINKS } from "../constants/links";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    animation: "fadeIn 0.5s ease-out",
  },
  linksContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  buttonsRow: {
    display: "flex",
    gap: "0.75rem",
    width: "100%",
    marginTop: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

interface MainProps {
  onDonate: () => void;
}

export const Main = ({ onDonate }: MainProps) => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <ProfileHeader />

      <div className={styles.linksContainer}>
        {SOCIAL_LINKS.map((link, index) => (
          <LinkItem key={link.url} {...link} index={index} />
        ))}
      </div>

      <div className={styles.buttonsRow}>
        <Button
          appearance="secondary"
          icon={<Briefcase24Regular />}
          onClick={() => navigate("/projects")}
        >
          Projects
        </Button>
        <Button
          appearance="primary"
          icon={<Mail24Regular />}
          onClick={() =>
            window.open("https://email.krnl64.win/base64/bnRAa3JubDMyLndpbg")
          }
        >
          Email
        </Button>
        <Button
          appearance="outline"
          icon={<LockClosed24Regular />}
          onClick={() =>
            window.open(
              "https://keys.openpgp.org/search?q=69A3A4946E2D6191ECE202814639E4B96D2F9B95",
            )
          }
        >
          PGP
        </Button>
        <Button
          appearance="subtle"
          icon={<Heart24Regular />}
          onClick={onDonate}
        >
          捐赠
        </Button>
      </div>
    </div>
  );
};
