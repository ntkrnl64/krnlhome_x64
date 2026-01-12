import { useState } from 'react';
import {
  FluentProvider, webLightTheme, webDarkTheme, Button, Text, Link,
  makeStyles, tokens, Toaster, useToastController, useId,
} from '@fluentui/react-components';
import {
  Mail24Regular, LockClosed24Regular, Heart24Regular,
  WeatherSunny24Filled, WeatherMoon24Filled
} from '@fluentui/react-icons';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkItem } from './components/LinkItem';
import { DonateDialog } from './components/DonateDialog';
import { SOCIAL_LINKS } from './constants/links';
import './App.css';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: `linear-gradient(135deg, ${tokens.colorNeutralBackground1} 0%, ${tokens.colorNeutralBackground2} 100%)`,
  },
  themeSwitch: { position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 100 },
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
  linksContainer: { width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' },
  buttonsRow: { display: 'flex', gap: '0.75rem', width: '100%', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' },
  footer: { marginTop: 'auto', paddingTop: '2rem', textAlign: 'center', opacity: 0.7 },
});

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showDonate, setShowDonate] = useState(false);
  const styles = useStyles();
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);

  return (
    <FluentProvider theme={isDark ? webDarkTheme : webLightTheme}>
      <div className={styles.root}>
        <div className={styles.themeSwitch}>
          <Button
            appearance="transparent"
            icon={isDark ? <WeatherMoon24Filled /> : <WeatherSunny24Filled />}
            onClick={() => setIsDark(!isDark)}
          />
        </div>

        <div className={styles.container}>
          <ProfileHeader />

          <div className={styles.linksContainer}>
            {SOCIAL_LINKS.map((link, index) => (
              <LinkItem key={link.url} {...link} index={index} />
            ))}
          </div>

          <div className={styles.buttonsRow}>
            <Button appearance="primary" icon={<Mail24Regular />} onClick={() => window.open('https://email.krnl64.win/base64/bnRAa3JubDMyLndpbg')}>Email</Button>
            <Button appearance="outline" icon={<LockClosed24Regular />} onClick={() => window.open('https://keys.openpgp.org/search?q=69A3A4946E2D6191ECE202814639E4B96D2F9B95')}>PGP Key</Button>
            <Button appearance="subtle" icon={<Heart24Regular />} onClick={() => setShowDonate(true)}>捐赠</Button>
          </div>

          <Text size={300} className={styles.footer}>
            Copyleft {new Date().getFullYear()} NtKrnl64 | Built with React & Fluent UI
            <br />
            <Link href="https://github.com/ntkrnl64/krnlhome_x64/blob/main/LICENSE" target="_blank">GPL-3.0 or later</Link>
          </Text>
        </div>

        <DonateDialog 
          open={showDonate} 
          onOpenChange={setShowDonate} 
          dispatchToast={dispatchToast} 
        />
        <Toaster toasterId={toasterId} />
      </div>
    </FluentProvider>
  );
}

export default App;
