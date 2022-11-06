import { css, Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-style: normal;
        font-family: "Red Buttery";
        font-weight: 400;
        src: local("red_buttery-webfont"),
          url(/fonts/red_buttery-webfont.woff) format("woff"),
          url(/fonts/red_buttery-webfont.woff2) format("woff2");
      }
    `}
  />
)
export default Fonts
