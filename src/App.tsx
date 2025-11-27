import { useState } from 'react';
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Button,
  Card,
  Text,
  Title1,
  Body1,
  Avatar,
  makeStyles,
  tokens,
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Link,
} from '@fluentui/react-components';
import {
  Globe24Regular,
  Document24Regular,
  Code24Regular,
  Mail24Regular,
  LockClosed24Regular,
  Heart24Regular,
  WeatherSunny24Filled,
  WeatherMoon24Filled,
} from '@fluentui/react-icons';
import './App.css';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: `linear-gradient(135deg, ${tokens.colorNeutralBackground1} 0%, ${tokens.colorNeutralBackground2} 100%)`,
  },
  themeSwitch: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    gap: '1.5rem',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    animation: 'fadeInDown 0.6s ease-out',
  },
  avatarContainer: {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      inset: '-4px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${tokens.colorBrandBackground}, ${tokens.colorBrandBackground2})`,
      opacity: 0.3,
      animation: 'pulse 2s ease-in-out infinite',
    },
  },
  avatar: {
    position: 'relative',
    border: `4px solid ${tokens.colorNeutralBackground1}`,
    boxShadow: tokens.shadow16,
  },
  title: {
    marginTop: '0.5rem',
    textAlign: 'center',
  },
  bio: {
    textAlign: 'center',
    color: tokens.colorNeutralForeground2,
    maxWidth: '400px',
  },
  linksContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
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
  buttonsRow: {
    display: 'flex',
    gap: '0.75rem',
    width: '100%',
    marginTop: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      gap: '1rem',
    },
  },
  actionButton: {
    flex: '1 1 auto',
    minWidth: '120px',
    '@media (max-width: 768px)': {
      minWidth: 'auto',
      '& > span:last-child': {
        display: 'none',
      },
    },
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '2rem',
    textAlign: 'center',
    opacity: 0.7,
  },
  donateMethod: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
  },
  donateOption: {
    padding: '1.25rem',
    cursor: 'pointer',
  },
  donateIcon: {
    fontSize: '32px',
    marginBottom: '0.5rem',
  },
});

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showDonate, setShowDonate] = useState(false);
  const styles = useStyles();

  const avatarUrl = 'https://assets-eo.krnl64.win/avatar.png';

  const links = [
    {
      title: '此站',
      url: 'https://krnl64.win',
      description: '一切的开始',
      icon: <Globe24Regular />,
    },
    {
      title: '博客',
      url: 'https://blog.krnl64.win',
      description: '技术分享与生活记录',
      icon: <Document24Regular />,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/ntkrnl64',
      description: '开源项目和代码仓库',
      icon: <Code24Regular />,
    }
  ];

  return (
    <FluentProvider theme={isDark ? webDarkTheme : webLightTheme}>
      <div className={styles.root}>
        {/* Theme Switch */}
        <div className={styles.themeSwitch}>
          <Button
            appearance="transparent"
            icon={isDark ? <WeatherMoon24Filled /> : <WeatherSunny24Filled />}
            onClick={() => setIsDark(!isDark)}
            aria-label="切换主题"
            style={{ fontSize: '24px' }}
          />
        </div>

        {/* Main Container */}
        <div className={styles.container}>
          {/* Header */}
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
            <Body1 className={styles.bio}>
              开发者 | 创造者 | 终身学习者
            </Body1>
          </div>

          {/* Links */}
          <div className={styles.linksContainer}>
            {links.map((link, index) => (
              <Card
                key={index}
                className={styles.linkCard}
                onClick={() => window.open(link.url, '_blank')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.linkContent}>
                  <div className={styles.linkIcon}>{link.icon}</div>
                  <div className={styles.linkText}>
                    <Text weight="semibold" size={400}>{link.title}</Text>
                    <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                      {link.description}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.buttonsRow}>
            <Button
              appearance="primary"
              icon={<Mail24Regular />}
              className={styles.actionButton}
              onClick={() => window.open('mailto:nt@krnl64.win')}
            >
              Email
            </Button>
            <Button
              appearance="outline"
              icon={<LockClosed24Regular />}
              className={styles.actionButton}
              onClick={() => window.open('https://keys.openpgp.org/search?q=69A3A4946E2D6191ECE202814639E4B96D2F9B95')}
            >
              PGP Key
            </Button>
            <Button
              appearance="subtle"
              icon={<Heart24Regular />}
              className={styles.actionButton}
              onClick={() => setShowDonate(true)}
            >
              捐赠
            </Button>
          </div>

          {/* Footer */}
          <Text size={300} className={styles.footer}>
            Copyleft {new Date().getFullYear()} NtKrnl64 | Built with React & Fluent UI
            <br />
            Licensed under{' '}
            <Link href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" inline>
              GPL-3.0-or-later
            </Link>
          </Text>
        </div>

        {/* Donate Dialog */}
        <Dialog open={showDonate} onOpenChange={(_, data) => setShowDonate(data.open)}>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>❤️ 支持我</DialogTitle>
              <DialogContent>
                <Body1 style={{ marginBottom: '1rem', color: tokens.colorNeutralForeground2 }}>
                  如果你觉得我的工作对你有帮助，欢迎通过以下方式支持我继续创作。
                </Body1>

                <div className={styles.donateMethod}>
                  <Card 
                    className={styles.donateOption}
                    onClick={() => navigator.clipboard.writeText('3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB').then(() => alert('地址已复制！'))}
                  >
                    <div className={styles.donateIcon}>₿</div>
                    <Text weight="semibold" size={500}>加密货币</Text>
                    <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                      点击复制BTC钱包地址
                    </Text>
                  </Card>
                </div>
              </DialogContent>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </div>
    </FluentProvider>
  );
}

export default App;
