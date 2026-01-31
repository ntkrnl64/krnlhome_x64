import { useState } from "react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
  Body1,
  Spinner,
  makeStyles,
  Toast,
  ToastTitle,
} from "@fluentui/react-components";
import {
  Heart24Regular,
  Dismiss24Regular,
  Person24Regular,
  Money24Regular,
  VehicleTruck24Regular,
  Diamond24Regular,
  Circle24Regular,
  Payment24Regular,
  Image24Regular,
} from "@fluentui/react-icons";
import { DonateOptionCard } from "./DonateOptionCard";

const useStyles = makeStyles({
  donateMethod: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  qrcodeImage: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
});

interface DonateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dispatchToast: (content: React.ReactNode, options?: any) => void;
}

export const DonateDialog = ({
  open,
  onOpenChange,
  dispatchToast,
}: DonateDialogProps) => {
  const styles = useStyles();
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(
    null,
  );
  const [qrcodeImage, setQrcodeImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);

  const closeDialog = () => {
    onOpenChange(false);
    setSelectedRecipient(null);
  };

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    dispatchToast(
      <Toast>
        <ToastTitle>{label} 已复制！</ToastTitle>
      </Toast>,
      { intent: "success" },
    );
  };

  const renderContent = () => {
    // 1. 第一层：选择收款人
    if (!selectedRecipient) {
      return (
        <>
          <DonateOptionCard
            icon={<Person24Regular />}
            title="XiaoYuan151"
            description="加密货币地址"
            onClick={() => setSelectedRecipient("xiaoyuan151")}
          />
          <DonateOptionCard
            icon={<Person24Regular />}
            title="NtKrnl"
            description="二维码 / 爱发电"
            onClick={() => setSelectedRecipient("ntkrnl")}
          />
          <DonateOptionCard
            icon={<Person24Regular />}
            title="Nicrozoft"
            description="爱发电 / B 站充电"
            onClick={() => setSelectedRecipient("nicrozoft")}
          />
        </>
      );
    }

    // 2. 第二层：XiaoYuan151 的加密货币
    if (selectedRecipient === "xiaoyuan151") {
      return (
        <>
          <DonateOptionCard
            icon={<Money24Regular />}
            title="Bitcoin (BTC)"
            description="3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB"
            onClick={() =>
              copy("3DPDaQ63u7nKJpc1jYgrPQTmu5vfgaWpUB", "BTC 地址")
            }
          />
          <DonateOptionCard
            icon={<VehicleTruck24Regular />}
            title="Dogecoin (DOGE)"
            description="DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH"
            onClick={() =>
              copy("DDr7NdvdtzxsQTuesq5UDNXT8WQAUEotjH", "DOGE 地址")
            }
          />
          <DonateOptionCard
            icon={<Diamond24Regular />}
            title="Ethereum (ETH)"
            description="0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500"
            onClick={() =>
              copy("0xA57F5F34f6a0B8f44C3363dBA6Dd996f801A0500", "ETH 地址")
            }
          />
          <DonateOptionCard
            icon={<Circle24Regular />}
            title="TRON (TRX)"
            description="TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF"
            onClick={() =>
              copy("TUVwPUf1NMFUbeuLQ91Qa4fPDWzZsxEwyF", "TRX 地址")
            }
          />
          <Button
            appearance="subtle"
            onClick={() => setSelectedRecipient(null)}
          >
            返回
          </Button>
        </>
      );
    }

    // 3. 第二层：NtKrnl 的二维码/爱发电
    if (selectedRecipient === "ntkrnl") {
      return (
        <>
          <DonateOptionCard
            icon={<Payment24Regular />}
            title="爱发电"
            description="微信、支付宝均可"
            onClick={() =>
              window.open("https://afdian.com/a/ntkrnl32", "_blank")
            }
          />
          <DonateOptionCard
            icon={<Payment24Regular />}
            title="支付宝"
            description="点击查看二维码"
            onClick={() => {
              setQrcodeImage("/alipay.png");
              setImageLoading(true);
            }}
          />
          <DonateOptionCard
            icon={<Image24Regular />}
            title="微信支付"
            description="点击查看二维码"
            onClick={() => {
              setQrcodeImage("/wechat.png");
              setImageLoading(true);
            }}
          />
          <Button
            appearance="subtle"
            onClick={() => setSelectedRecipient(null)}
          >
            返回
          </Button>
        </>
      );
    }

    // 4. 第二层：Nicrozoft
    if (selectedRecipient === "nicrozoft") {
      return (
        <>
          <DonateOptionCard
            icon={<Heart24Regular />}
            title="爱发电"
            description="支持 Nicrozoft"
            onClick={() =>
              window.open("https://afdian.com/a/nicrozoft", "_blank")
            }
          />
          <DonateOptionCard
            icon={<Payment24Regular />}
            title="B 站充电"
            description="前往 Bilibili"
            onClick={() =>
              window.open(
                "https://space.bilibili.com/3546641434937345",
                "_blank",
              )
            }
          />
          <Button
            appearance="subtle"
            onClick={() => setSelectedRecipient(null)}
          >
            返回
          </Button>
        </>
      );
    }
  };

  return (
    <>
      {/* 捐赠主列表弹窗 */}
      <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <Heart24Regular
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  支持我
                </span>
                <Button
                  appearance="subtle"
                  icon={<Dismiss24Regular />}
                  onClick={closeDialog}
                />
              </div>
            </DialogTitle>
            <DialogContent>
              <Body1 style={{ marginBottom: "1rem", display: "block" }}>
                如果你觉得我的工作对你有帮助，欢迎支持我。
              </Body1>
              <div className={styles.donateMethod}>{renderContent()}</div>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>

      {/* 二维码查看弹窗 */}
      <Dialog open={!!qrcodeImage} onOpenChange={() => setQrcodeImage(null)}>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>付款二维码</span>
                <Button
                  appearance="subtle"
                  icon={<Dismiss24Regular />}
                  onClick={() => setQrcodeImage(null)}
                />
              </div>
            </DialogTitle>
            <DialogContent>
              <div
                style={{
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {imageLoading && <Spinner label="加载中..." />}
                <img
                  src={qrcodeImage || ""}
                  alt="QR"
                  className={styles.qrcodeImage}
                  onLoad={() => setImageLoading(false)}
                  style={{ display: imageLoading ? "none" : "block" }}
                />
              </div>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};
