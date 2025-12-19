import { Card, Text, makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  linkCard: {
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.6s ease-out backwards'
  },
  linkContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
  },
  linkIcon: {
    fontSize: '28px',
    color: tokens.colorBrandForeground1,
    flexShrink: 0,
  },
  linkText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    textAlign: 'left',
  },
});

interface LinkItemProps {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const LinkItem = ({ title, url, description, icon, index }: LinkItemProps) => {
  const styles = useStyles();
  return (
    <Card
      className={styles.linkCard}
      onClick={() => window.open(url, '_blank')}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.linkContent}>
        <div className={styles.linkIcon}>{icon}</div>
        <div className={styles.linkText}>
          <Text weight="semibold" size={400}>{title}</Text>
          <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
            {description}
          </Text>
        </div>
      </div>
    </Card>
  );
};
