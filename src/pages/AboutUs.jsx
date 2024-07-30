
import { TeamContainer, TeamCarousel, TeamMember, MemberPhoto, MemberDescription } from '../styledComponents/StyledAboutUs.js';
import {GlobalStyle} from '../styledComponents/StyledHomePages.js'
import Slider from 'react-slick';
import eric from '../pic/WhatsApp Image 2024-07-23 at 16.28.48.jpeg';
import anna from '../pic/WhatsApp Image 2024-07-24 at 14.13.16.jpeg';
import daria from '../pic/WhatsApp Image 2024-07-23 at 18.58.13.jpeg';
import david from '../pic/WhatsApp Image 2024-07-24 at 14.19.58.jpeg';
import carmen from '../pic/WhatsApp Image 2024-06-14 at 17.11.18.jpeg';
import { useUserContext } from '../providers/UserProvider.jsx';

const AboutUs = () => {
    const [user] = useUserContext();

    console.log("Rendering AboutUs Component");

    const teamMembers = [
        {
            name: "Carmen Sas",
            position: "Desarrolladora Frontend y Scrum Master",
            tasks: "Desarrollo de interfaces y experiencia de usuario. Diseño de interfaces y mejora de la usabilidad.",
            photo: carmen,
        },
        {
            name: "Eric Gascó",
            position: "Desarrollador Frontend y Backend",
            tasks: "Gestión de bases de datos y servidores.",
            photo: eric,
        },
        {
            name: "Anna Canivell",
            position: "Desarrolladora Backend y frontend",
            tasks: "Gestión de bases de datos y servidores.",
            photo: anna,
        },
        {
            name: "David Casas",
            position: "Desarrollador Frontend",
            tasks: "Desarrollo de interfaces y experiencia de usuario.",
            photo: david,
        },
        {
            name: "Daria Yerashova",
            position: "Desarrolladora Frontend y Scrum Master",
            tasks: "Desarrollo de interfaces y experiencia de usuario. Diseño de interfaces y mejora de la usabilidad.",
            photo: daria,
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <GlobalStyle />
            <TeamContainer data-aos="fade-up">
                <h1>Conoce a nuestro equipo</h1>
                <TeamCarousel>
                    <Slider {...settings}>
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index}>
                                <MemberPhoto src={member.photo} alt={member.name} />
                                <MemberDescription>
                                    <h2>{member.name}</h2>
                                    <p>{member.position}</p>
                                    <p>{member.tasks}</p>
                                </MemberDescription>
                            </TeamMember>
                        ))}
                    </Slider>
                </TeamCarousel>
            </TeamContainer>
        </>
    );
};

export default AboutUs;
