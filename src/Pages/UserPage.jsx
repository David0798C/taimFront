import {Container, CardContainer, Button, InterestContainer, Background} from '../StyledComponents/StyledUserPage';

const UserProfile = () => {
  return (
    <>
    <Background />
    <Container>
      <CardContainer>
        <img src="https://placehold.co/300?text=User" alt="User Profile" className="profile-image" />
        <div>
          <h1 className="name">John</h1>
          <p>Web Developer</p>
          <Button>Follow</Button>
        </div>
      </CardContainer>
      <InterestContainer>
        <h1>Lo que ofrezco</h1>
        <br />
          <ul>
            <li>Matemáticas</li>
            <li>Química</li>
          </ul>
      </InterestContainer>
      <InterestContainer>
        <h1>Lo que busco</h1>
        <br />
          <ul>
            <li>Latín</li>
            <li>Historia del Arte</li>
          </ul>
      </InterestContainer>
    </Container>
    </>
  );
};

export default UserProfile;

