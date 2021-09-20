/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button, Link } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-Right.png";

const data = {
  btnURL: "https://github.com/EpicDevv",
};

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Welcome to My Website / Portfolio!
          </Heading>
          <Text as="p" variant="heroSecondary">
            Zayne here! Thank you for being interested in viewing my work as a
            Web Developer! If you are looking to collab with me or just want to
            explore my best projects, you are in the right place!
          </Text>
          <Link href={data.btnURL}>
          <Button sx={styles.neww} variant="primary">
            View My Github
          </Button>
          </Link>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  neww: {
    color: "#3bb4cd",
    backgroundColor: "white",
    border: "2px solid #3bb4cd",
    "&:hover": {
      color: "white",
      backgroundColor: "#3bb4cd",
      boxShadow: "0 0px 0px 0 #3bb4cd inset, 0 5px 50px 0 #3bb4cd",
    },
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
