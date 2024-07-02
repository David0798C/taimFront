import {
    Container,
    CardContainer,
    Button,
    InterestContainer,
    Background,
    SkillsContainer,
    ButtonEdit,
} from "../styledComponents/StyledUserPage";
import { useEffect, useState } from 'react';
import { getUser } from "../services/user";

const UserProfile = () => {
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [birthday, setBirthday] = useState();
    const [profilePic, setProfilePic] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const [interests, setInterests] = useState();
    const [skills, setSkills] = useState();
    const [rating, setRating] = useState();

    useEffect(() => {
        getUser().then(data => setData(data.data))
    }, []);

    return (
        <>
            <Background />
            <Container>
                <CardContainer>
                    <ButtonEdit>Editar</ButtonEdit>
                    <img
                        src="https://placehold.co/300?text=User"
                        alt="User Profile"
                        className="profile-image"
                    />
                    <div>
                        <h1 className="name">Nombre Apellido </h1>
                        <p>@username</p>
                        <p>@email</p>
                        <p>Localidad</p>
                        <p>Desarrollador Web</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, minima. Eos eum nisi nam atque veritatis culpa mollitia minima perferendis.</p>
                        <Button>Seguir</Button>
                    </div>
                </CardContainer>
                <SkillsContainer>
                    <h1>Habilidades</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </SkillsContainer>
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
