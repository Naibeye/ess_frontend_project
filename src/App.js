import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box
} from '@chakra-ui/react';
import RouteApplication from './Route';
import FooterSimple from './Pages/Footer';
import Header from './Pages/Header';
import { GlobalProvider } from './Pages/Context';


const colors = {
  brand: {
    primary:'#006600',
    secondary:"#9E9C09",
  },
  fonts: {
    heading: "Poppins",
    body: "poppins",
  },
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
// const theme = extendTheme({ breakpoints })
const theme = extendTheme({ colors ,breakpoints })
function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider >
      <Header/>
      <Box minH="100vh" as="section" minW={{ base: "full", md: "100%", lg: "90%" }}>
      <RouteApplication />
      </Box>
      <FooterSimple/>
      </GlobalProvider>
    </ChakraProvider>
  );
}

export default App;
