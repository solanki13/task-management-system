import {
  createContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) =>
          prev === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}