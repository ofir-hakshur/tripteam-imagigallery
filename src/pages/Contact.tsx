import styled from "styled-components";

export const Contact = () => {
  return (
    <Container>
      <Title>Get in Touch</Title>
      <Description>
        We're here to help and answer any question you might have.
        <br />
        We look forward to hearing from you
      </Description>
      <Mail>support@imagigallery.com</Mail>
    </Container>
  );
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 24px;
  gap: 16px;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #f94904;
`;

export const Description = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 900px;
`;

const Mail = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
