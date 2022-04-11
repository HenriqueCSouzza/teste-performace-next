import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "../theme";
export const muiCache = createCache({
  key: "css",
  prepend: true,
});

export default function Theme({ children }) {
  const withEmotion = { ...pageProps, emotionCache: muiCache };
  console.log("Theme", { Component, pageProps });
  return (
    <CacheProvider value={muiCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}
