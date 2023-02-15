import React from "react";
import index from "./index";
import map from "./map";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>香港交通一站通</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">主頁</Nav.Link>
              <Nav.Link href="/map">地圖</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/map" element={<map />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
