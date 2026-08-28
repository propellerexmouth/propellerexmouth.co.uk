import React from "react";
import HoldingPage from "./components/HoldingPage";
import HomePage from "./components/HomePage";
import { holdingPage } from "../holding.config";

const Page = () => {
  return holdingPage ? <HoldingPage /> : <HomePage />;
};

export default Page;
