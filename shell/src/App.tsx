import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Box, theme } from 'boneyard';
import Content from 'content';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './index.css';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="row"
            alignItems="space-between"
          >
            <Navigation />
            <Footer />
            <Content />
          </Box>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
