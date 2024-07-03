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

    useEffect(() => {
        getUser().then(res => {
            console.log(res.data);
            setData(res.data);
            // TODO 
        });
    }, []);

    return (
        <>
            <Background />
            {data?.map((data) => (
                <Container key={data.id}>
                    <CardContainer>
                        <ButtonEdit>Editar</ButtonEdit>
                        <img
                            src="https://placehold.co/300?text=User"
                            alt="User Profile"
                            className="profile-image"
                        />
                        <div>
                            < h1 className="name" > {data?.name} {data?.surname}</h1>
                            <p>{data?.username}</p>
                            <p>{data?.email}</p>
                            <p>{data?.birthday}</p>
                            <p>{data?.location}Localidad</p>
                            <p>{data?.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iure pariatur obcaecati vero, voluptas facilis incidunt maiores dolorum rerum.</p>
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
                </Container >
            ))}
        </>
    );
};

export default UserProfile;
