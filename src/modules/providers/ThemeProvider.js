import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();
export const muiCache = createCache({
  key: "css",
  prepend: true,
});

export default function Theme({ Component, pageProps }) {
  const withEmotion = { ...pageProps, emotionCache: muiCache };

  return (
    <CacheProvider value={muiCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {Component(withEmotion)}
      </MuiThemeProvider>
    </CacheProvider>
  );
}
