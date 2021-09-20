import React, { useState } from "react";
import { Box, Link as A } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/drawer";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import menuItems from "./header.data";

const social = [
  {
    btnURL: 'https://www.facebook.com/profile.php?id=100071547166443/',
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    btnURL: "https://twitter.com/epic_devv/",
    path: "/",
    icon: <FaTwitter />,
  },
  {
    btnURL:"https://github.com/EpicDevv/",
    path: "/",
    icon: <FaGithubAlt />,
  },
  {
    btnURL: 'https://www.instagram.com/epic_devv/',
    path: "/",
    icon: <FaInstagram />,
  },
  {
    btnURL: "https://www.youtube.com/channel/UCSm3TslJkZBoYs-qFC9G_4Q/",
    path: "/",
    icon: <FaYoutube />,
  },
  { 
    btnURL: "https://www.linkedin.com/in/zayne-lovecraft-0ba3a621a/", 
    path: "/",
    icon: <FaLinkedin />,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
          </Box>
          <Box sx={styles.menuFooter}>
              <Box sx={styles.social}>
                {social.map((socialItem, i) => (
                  <Box as="span" key={i} sx={styles.social.icon}>
                    <A sx={styles.social.icon}to={socialItem.path} href={socialItem.btnURL}>{socialItem.icon}
                    </A>

                  </Box>
                ))}
              </Box>

          </Box>

        </Box>
        
      </Scrollbars>

    </Drawer>
  );
}

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "#3bb4cd",
      },
      "&.active": {
        color: "#3bb4cd",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "#3bb4cd",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};