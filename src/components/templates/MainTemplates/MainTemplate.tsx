import { Container } from "../../container/Container";
import { Footer } from "../../footer/Footer";
import { Logo } from "../../logo/Logo";

import type React from "react";
import { Menu } from "../../menu/Menu";


type MainTemplatePros = {
  children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplatePros) {

  return (
    <>

      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container >

      {children}

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}