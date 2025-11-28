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
  Toaster,
  useToastController,
  useId,
  Toast,
  ToastTitle,
  Spinner,
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
  Person24Regular,
  Money24Regular,
  VehicleTruck24Regular,
  Diamond24Regular,
  Circle24Regular,
  Payment24Regular,
  Image24Regular,
  Dismiss24Regular,
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
  qrcodeImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
});

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showDonate, setShowDonate] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);
  const [qrcodeImage, setQrcodeImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const styles = useStyles();
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);

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
            <Link href="https://github.com/ntkrnl64/krnlhome_x64/blob/main/LICENSE" target="_blank" inline>
              GPL-3.0 or later
            </Link>
          </Text>
        </div>

        {/* Donate Dialog */}
        <Dialog open={showDonate} onOpenChange={(_, data) => {
          setShowDonate(data.open);
          if (!data.open) setSelectedRecipient(null);
        }}>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span><Heart24Regular style={{ marginRight: '8px', verticalAlign: 'middle' }} />支持我</span>
                  <Button
                    appearance="subtle"
                    icon={<Dismiss24Regular />}
                    onClick={() => {
                      setShowDonate(false);
                      setSelectedRecipient(null);
                    }}
                    aria-label="关闭"
                  />
                </div>
              </DialogTitle>
              <DialogContent>
                <Body1 style={{ marginBottom: '1rem', color: tokens.colorNeutralForeground2 }}>
                  如果你觉得我的工作对你有帮助，欢迎通过以下方式支持我继续创作。
                </Body1>

                <div className={styles.donateMethod}>
                  {!selectedRecipient ? (
                    <>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => setSelectedRecipient('xiaoyuan151')}
                      >
                        <div className={styles.donateIcon}><Person24Regular /></div>
                        <Text weight="semibold" size={500}>XiaoYuan151</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                          查看加密货币地址
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => setSelectedRecipient('ntkrnl')}
                      >
                        <div className={styles.donateIcon}><Person24Regular /></div>
                        <Text weight="semibold" size={500}>NtKrnl</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                          查看二维码和BTC
                        </Text>
                      </Card>
                    </>
                  ) : selectedRecipient === 'xiaoyuan151' ? (
                    <>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => {
                          navigator.clipboard.writeText('3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB').then(() => {
                            dispatchToast(
                              <Toast>
                                <ToastTitle>BTC 地址已复制！</ToastTitle>
                              </Toast>,
                              { intent: 'success' }
                            );
                          });
                        }}
                      >
                        <div className={styles.donateIcon}><Money24Regular /></div>
                        <Text weight="semibold" size={500}>Bitcoin (BTC)</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2, wordBreak: 'break-all' }}>
                          3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => {
                          navigator.clipboard.writeText('DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH').then(() => {
                            dispatchToast(
                              <Toast>
                                <ToastTitle>DOGE 地址已复制！</ToastTitle>
                              </Toast>,
                              { intent: 'success' }
                            );
                          });
                        }}
                      >
                        <div className={styles.donateIcon}><VehicleTruck24Regular /></div>
                        <Text weight="semibold" size={500}>Dogecoin (DOGE)</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2, wordBreak: 'break-all' }}>
                          DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => {
                          navigator.clipboard.writeText('0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500').then(() => {
                            dispatchToast(
                              <Toast>
                                <ToastTitle>ETH 地址已复制！</ToastTitle>
                              </Toast>,
                              { intent: 'success' }
                            );
                          });
                        }}
                      >
                        <div className={styles.donateIcon}><Diamond24Regular /></div>
                        <Text weight="semibold" size={500}>Ethereum (ETH)</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2, wordBreak: 'break-all' }}>
                          0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => {
                          navigator.clipboard.writeText('TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF').then(() => {
                            dispatchToast(
                              <Toast>
                                <ToastTitle>TRX 地址已复制！</ToastTitle>
                              </Toast>,
                              { intent: 'success' }
                            );
                          });
                        }}
                      >
                        <div className={styles.donateIcon}><Circle24Regular /></div>
                        <Text weight="semibold" size={500}>TRON (TRX)</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2, wordBreak: 'break-all' }}>
                          TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF
                        </Text>
                      </Card>
                      <Button 
                        appearance="subtle" 
                        onClick={() => setSelectedRecipient(null)}
                        style={{ marginTop: '0.5rem', width: '100%' }}
                      >
                        返回
                      </Button>
                    </>
                  ) : (
                    <>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => {
                          navigator.clipboard.writeText('bc1qjffdph9z08tjh4x5fap4nvxyakwxra2at5gu3p').then(() => {
                            dispatchToast(
                              <Toast>
                                <ToastTitle>BTC 地址已复制！</ToastTitle>
                              </Toast>,
                              { intent: 'success' }
                            );
                          });
                        }}
                      >
                        <div className={styles.donateIcon}><Money24Regular /></div>
                        <Text weight="semibold" size={500}>Bitcoin (BTC)</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2, wordBreak: 'break-all' }}>
                          bc1qjffdph9z08tjh4x5fap4nvxyakwxra2at5gu3p
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => setQrcodeImage('/alipay.png')}
                      >
                        <div className={styles.donateIcon}><Payment24Regular /></div>
                        <Text weight="semibold" size={500}>支付宝</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                          点击查看付款二维码
                        </Text>
                      </Card>
                      <Card 
                        className={styles.donateOption}
                        onClick={() => setQrcodeImage('/wechat.png')}
                      >
                        <div className={styles.donateIcon}><Image24Regular /></div>
                        <Text weight="semibold" size={500}>微信支付</Text>
                        <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                          点击查看付款二维码
                        </Text>
                      </Card>
                      <Button 
                        appearance="subtle" 
                        onClick={() => setSelectedRecipient(null)}
                        style={{ marginTop: '0.5rem', width: '100%' }}
                      >
                        返回
                      </Button>
                    </>
                  )}
                </div>
              </DialogContent>
            </DialogBody>
          </DialogSurface>
        </Dialog>

        {/* QR Code Dialog */}
        <Dialog open={!!qrcodeImage} onOpenChange={(_, data) => {
          if (!data.open) {
            setQrcodeImage(null);
            setImageLoading(false);
          }
        }}>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span>付款二维码</span>
                  <Button
                    appearance="subtle"
                    icon={<Dismiss24Regular />}
                    onClick={() => {
                      setQrcodeImage(null);
                      setImageLoading(false);
                    }}
                    aria-label="关闭"
                  />
                </div>
              </DialogTitle>
              <DialogContent>
                <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {imageLoading && <Spinner label="加载中..." />}
                  {qrcodeImage && (
                    <img 
                      src={qrcodeImage} 
                      alt="QR Code" 
                      className={styles.qrcodeImage}
                      onLoad={() => setImageLoading(false)}
                      onLoadStart={() => setImageLoading(true)}
                      style={{ display: imageLoading ? 'none' : 'block' }}
                    />
                  )}
                </div>
              </DialogContent>
            </DialogBody>
          </DialogSurface>
        </Dialog>

        <Toaster toasterId={toasterId} />
      </div>
    </FluentProvider>
  );
}

export default App;
