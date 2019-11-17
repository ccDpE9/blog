import Typography from "typography";
import Github from "typography-theme-github";

Github.overrideThemeStyles = ({ rhytm }, options ) => ({
  "a:hover,a:active": {
    textDecoration: "none"
  }
})

const typography = new Typography(Github);

export default typography;
