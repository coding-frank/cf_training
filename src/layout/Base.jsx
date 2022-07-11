import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

export default function Base({ children }) {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </BrowserRouter>
  );
}
