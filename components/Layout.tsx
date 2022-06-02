import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProfileIcon from "../public/man.png";

import styles from "../styles/Layout.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import BookIcon from "@mui/icons-material/Book";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";

export default function Layout({ children }: any) {
  const router = useRouter();

  const [tabValue, setTabValue] = useState("about-me");

  useEffect(() => {
    setTabValue(router.pathname.substring(1));
  }, []);

  const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    router.push(newValue);
  };

  return (
    <div className={styles.main}>
      <Tabs
        orientation="vertical"
        aria-label="Vertical Navbar"
        className={styles.tabs}
        value={tabValue}
        onChange={onTabChange}
        centered
      >
        <Tab
          className={styles.tab}
          icon={
            <HomeOutlinedIcon
              fontSize="large"
              className={tabValue !== "about-me" ? styles.icon : ""}
            />
          }
          label={
            <span
              className={
                tabValue !== "about-me"
                  ? `${styles.tabLabelColor} ${styles.tabLabel}`
                  : styles.tabLabel
              }
            >
              About Me
            </span>
          }
          value="about-me"
        />
        <Tab
          className={styles.tab}
          icon={
            <SchoolOutlinedIcon
              fontSize="large"
              className={tabValue !== "resume" ? styles.icon : ""}
            />
          }
          label={
            <span
              className={
                tabValue !== "resume"
                  ? `${styles.tabLabelColor} ${styles.tabLabel}`
                  : styles.tabLabel
              }
            >
              Resume
            </span>
          }
          value="resume"
        />
        <Tab
          className={styles.tab}
          icon={
            <WorkOutlineOutlinedIcon
              fontSize="large"
              className={tabValue !== "work" ? styles.icon : ""}
            />
          }
          label={
            <span
              className={
                tabValue !== "work"
                  ? `${styles.tabLabelColor} ${styles.tabLabel}`
                  : styles.tabLabel
              }
            >
              Work
            </span>
          }
          value="work"
        />
        {/* <Tab icon={<BookIcon />} value="blog" /> */}
        <Tab
          className={styles.tab}
          icon={
            <EmailOutlinedIcon
              fontSize="large"
              className={tabValue !== "contact-me" ? styles.icon : ""}
            />
          }
          label={
            <span
              className={
                tabValue !== "contact-me"
                  ? `${styles.tabLabelColor} ${styles.tabLabel}`
                  : styles.tabLabel
              }
            >
              Contact Me
            </span>
          }
          value="contact-me"
        />
      </Tabs>
      <div className={styles.profile}>
        <div className={styles.profilePhoto}>
          <Image
            src={ProfileIcon}
            alt="Profile Image"
            width={180}
            height={180}
          />
        </div>
        <div className={styles.profileName}>Rishabh Dubey</div>
        <div className={styles.profileSubtitle}>Full Stack Developer</div>
        <div className={styles.socials}>
          <LinkedInIcon className={styles.socialIcon} />
          <GitHubIcon className={styles.socialIcon} />
          <TwitterIcon className={styles.socialIcon} />
        </div>
        <Button className={styles.downloadCV} variant="outlined" size="large">
          Download CV
        </Button>
      </div>
      <div className={styles.childComponent}>{children}</div>
    </div>
  );
}
