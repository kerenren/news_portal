import React, { useState, useEffect } from 'react';
import { Container } from "@chakra-ui/core"
import { NewsContext } from "./lib/Context"
import NavBar from "./components/NavBar"
import Home from "./page/Home"
import Login from './page/Login';
import BackToTop from "./components/BackToTop"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { getArticles } from "./api";
import queries from "./lib/queries"

function App() {
  const [articles, setArticles] = useState([])
  const [apiError, setApiError] = useState("")
  const [query, setQuery] = useState(queries[0])
  const [tabIndex, setTabIndex] = useState(0)


  async function fetchData(topic) {
    const response = await getArticles(topic);
    console.log(response)
    console.log(response.articles)
    setArticles(response.articles)
  }

  useEffect(() => {

    try {
      fetchData(query)
    }
    catch (error) {
      setApiError(error)
    }

  }, [query, setApiError])

  return (
    <NewsContext.Provider value={{ articles, setArticles, apiError, setApiError, query, setQuery, tabIndex, setTabIndex }}>
      <Router>
        <Container centerContent maxW="xl">
          <NavBar />
        </Container>
        <BackToTop />

        <Switch>
          <Route exact path='/home' component={() => (<Home />)} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path='/login' component={() => (<Login />)} />
        </Switch>

      </Router>
    </NewsContext.Provider>
  );
}

export default App;
