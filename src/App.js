import React, { useState, useEffect } from 'react';
import { Container } from "@chakra-ui/core"
import { NewsContext } from "./lib/Context"
import NavBar from "./components/NavBar"
import Home from "./page/Home"
import BackToTop from "./components/BackToTop"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { getArticles } from "./api";


function App() {
  const [articles, setArticles] = useState([])
  const [apiError, setApiError] = useState("")
  const [query, setQuery] = useState("bitcoin")

  
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
 
  }, [query , setApiError])

  return (
    <NewsContext.Provider value={{ articles, setArticles, apiError, setApiError, query, setQuery }}>
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
        </Switch>

      </Router>
    </NewsContext.Provider>
  );
}

export default App;
