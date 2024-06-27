import { Container,CardContainer, Button } from '../StyledComponents/StyledUserPage';

const UserProfile = () => {
  return (
    <Container>
      <CardContainer>
        <img src="https://placehold.co/300?text=User" alt="User Profile" className="profile-image" />
        <div>
          <h1 className="name">John Doe</h1>
          <p className="role">Web Developer</p>
          <Button>Follow</Button>
        </div>
      </CardContainer>
    </Container>
  );
};

export default UserProfile;

