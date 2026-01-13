import { Grid, Container, styled, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../../../theme";
import MyButton from "../../../../components/Styled/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const StyledHero = styled("div")(() => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));
const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Mario Junio
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <MyButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </MyButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <MyButton>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </MyButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
