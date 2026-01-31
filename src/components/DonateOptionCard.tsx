import { Card, Text, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  donateOption: {
    padding: "1.25rem",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    ":hover": {
      transform: "translateY(-2px)",
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  donateIcon: {
    fontSize: "32px",
    marginBottom: "0.5rem",
    color: tokens.colorBrandForeground1,
  },
});

interface DonateOptionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick: () => void;
}

export const DonateOptionCard = ({
  icon,
  title,
  description,
  onClick,
}: DonateOptionCardProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.donateOption} onClick={onClick}>
      <div className={styles.donateIcon}>{icon}</div>
      <Text weight="semibold" size={500}>
        {title}
      </Text>
      {description && (
        <Text
          size={300}
          style={{
            color: tokens.colorNeutralForeground2,
            wordBreak: "break-all",
          }}
        >
          {description}
        </Text>
      )}
    </Card>
  );
};
