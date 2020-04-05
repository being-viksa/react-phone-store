import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p className="mt-2">
        This is a demo react site, created by{" "}
        <strong>Vikram Singh Rajpurohit</strong>
      </p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.section`
  background: #b7e9f7;
  position: fixed;
  border: 0;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    text-align: center;
  }
`;
