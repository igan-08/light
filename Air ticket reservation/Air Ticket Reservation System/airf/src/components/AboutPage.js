import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  max-width: 600px;
`;

const AboutPage = () => {
  return (
    <div style={{ backgroundImage:'url(https://img.freepik.com/free-vector/airplane-air-poster_1284-9439.jpg?size=626&ext=jpg&ga=GA1.1.955878982.1678699792&semt=sph)',backgroundRepeat:"no-repeat",backgroundSize: "cover" }}>
    <Container>
      <Title>About Us</Title>
      <Text>
        We are a leading air ticket reservation website committed to providing our customers with the best deals on air tickets. With our user-friendly interface, you can easily search for and book flights from the comfort of your own home. Our team of experienced travel experts is available 24/7 to assist you with any questions or concerns you may have. Whether you are planning a family vacation or a business trip, we've got you covered.
      </Text>
    </Container>
    </div>
  );
};

export default AboutPage;
