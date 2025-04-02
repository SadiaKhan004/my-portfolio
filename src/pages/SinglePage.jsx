import React, { useState } from "react";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export function SinglePage() {
  const [activePage, setActivePage] = useState("home");

  const renderPageContent = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "skills":
        return <Skills />;
      case "about":
        return <div className="mx-auto mt-96 mb-2  md:p-8 sm: mt-84 pt-10"><About/></div>
      case "projects":
      return <Projects />;
      // case "resume":
      //   return <h1 className="text-4xl">Resume Section</h1>;
      // case "contact":
      //   return <h1 className="text-4xl">Contact Section</h1>;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header setActivePage={setActivePage} />
      <div className="p-4">{renderPageContent()}</div>
    </>
  );
}
