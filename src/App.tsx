import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Button,
  Text,
  Link,
  makeStyles,
  tokens,
  Toaster,
  useToastController,
  useId,
} from "@fluentui/react-components";
import {
  WeatherSunny24Filled,
  WeatherMoon24Filled,
} from "@fluentui/react-icons";
import { DonateDialog } from "./components/DonateDialog";
import { Main } from "./pages/Main";
import { Projects } from "./pages/Projects";
import "./App.css";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    background: `linear-gradient(135deg, ${tokens.colorNeutralBackground1} 0%, ${tokens.colorNeutralBackground2} 100%)`,
  },
  themeSwitch: {
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
    zIndex: 100,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    gap: "1.5rem",
    flexGrow: 1,
  },
  footer: {
    marginTop: "auto",
    paddingTop: "2rem",
    textAlign: "center",
    opacity: 0.7,
  },
});

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showDonate, setShowDonate] = useState(false);
  const styles = useStyles();
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  return (
    <FluentProvider theme={isDark ? webDarkTheme : webLightTheme}>
      <BrowserRouter>
        <div className={styles.root}>
          {/* 主题切换按钮 */}
          <div className={styles.themeSwitch}>
            <Button
              appearance="transparent"
              icon={isDark ? <WeatherMoon24Filled /> : <WeatherSunny24Filled />}
              onClick={() => setIsDark(!isDark)}
            />
          </div>

          {/* 路由内容容器 */}
          <div className={styles.container}>
            <Routes>
              <Route
                path="/"
                element={<Main onDonate={() => setShowDonate(true)} />}
              />
              <Route path="/projects" element={<Projects />} />
            </Routes>

            {/* 页脚 */}
            <Text size={300} className={styles.footer}>
              Copyleft {new Date().getFullYear()} NtKrnl64 | Built with React &
              Fluent UI
              <br />
              <Link
                href="https://github.com/ntkrnl64/krnlhome_x64/blob/main/LICENSE"
                target="_blank"
              >
                GPL-3.0 or later
              </Link>
            </Text>
          </div>

          <DonateDialog
            open={showDonate}
            onOpenChange={setShowDonate}
            dispatchToast={dispatchToast}
          />
          <Toaster toasterId={toasterId} />
        </div>
      </BrowserRouter>
    </FluentProvider>
  );
}

export default App;
