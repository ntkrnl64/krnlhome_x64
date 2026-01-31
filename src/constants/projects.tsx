export type ProjectStatus = "Active" | "Archived" | "WIP" | "Maintenance";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string; // GitHub/GitLab 链接
  demoUrl?: string; // 在线演示链接
  status: ProjectStatus;
  featured?: boolean; // 是否置顶/推荐
}

export const PROJECTS: Project[] = [
  {
    id: "sleepy",
    title: "sleepy",
    description:
      "一个使用 python 编写的网页在线状态显示工具，支持设备状态/主要状态，实时更新。",
    tags: ["Python", "Web"],
    repoUrl: "https://github.com/sleepy-project/sleepy",
    demoUrl: "https://sleepy.krnl64.win",
    status: "Active",
    featured: true,
  },
  {
    id: "qsl",
    title: "Query Store Links",
    description:
      "使用 C# + TypeScript 编写的在线工具，用于查询 Microsoft Store 应用的直接下载链接。",
    tags: ["React", "TypeScript", "Fluent UI", "C#", "ASP.NET Core"],
    repoUrl: "https://github.com/query-store-links/qsl",
    demoUrl: "https://qsl.krnl64.win",
    status: "Maintenance",
    featured: true,
  },
  {
    id: "msstore_cdn",
    title: "Microsoft Store 加速",
    description:
      "一个使用 Rust 编写的 Microsoft Store CDN 优选程序，提升 Microsoft Store / Windows Update 下载速度。",
    tags: ["Rust", "Windows"],
    repoUrl: "https://github.com/ntkrnl64/msstore-cdn",
    status: "Maintenance",
  },
  {
    id: "email-encryption",
    title: "电子邮件加密器",
    description:
      "一个简单的使用可逆编码（Base64）对电子邮件地址进行加密和解密的工具，防止垃圾邮件机器人抓取。",
    tags: ["React", "TypeScript", "Fluent UI"],
    repoUrl: "https://github.com/ntkrnl64/email-encryption",
    demoUrl: "https://email.krnl64.win",
    status: "Maintenance",
  },
  {
    id: "stalk",
    title: "stalk",
    description: "使用 Java 编写的 Minecraft 服务器插件，监视玩家活动。",
    tags: ["Java", "Minecraft", "Bukkit"],
    repoUrl: "https://github.com/ntkrnl64/stalk",
    status: "Maintenance",
  },
];
