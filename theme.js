// import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const styles = {
//   global: (props) => ({
//     body: {
//       bg: mode(
//         props.theme.semanticTokens.colors["chakra-body-bg"]._light,
//         "blackAlpha.900"
//       )(props),
//     },
//   }),
// };

// const theme = extendTheme({ config, styles });

// export default theme;

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("beige.100", "beige.900")(props), // Change background color to beige in dark mode
      color: mode("black", "white")(props), // Adjust text color for better readability
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
