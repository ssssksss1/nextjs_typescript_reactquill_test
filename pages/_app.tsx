import { AppProps } from "next/app";
//import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../utils/theme/theme";
import { Provider } from "react-redux";
import { store } from "store/index";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    //<ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
    //</ThemeProvider>
  );
};
export default MyApp;
