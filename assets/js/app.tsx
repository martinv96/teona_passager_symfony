import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../js/layout";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

<script>
  console.log("Symfony et Twig sont fonctionnels !");
</script>


export default App;
