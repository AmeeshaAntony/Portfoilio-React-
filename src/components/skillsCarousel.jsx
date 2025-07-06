import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './skillsCarousel.css';
const skills = [
    { name: 'HTML', description: 'Markup language for web pages' },
    { name: 'CSS', description: 'Styles for layout and design' },
    { name: 'JavaScript', description: 'Logic and interactivity' },
    { name: 'React', description: 'Frontend library for UI' },
    { name: 'Node.js', description: 'Backend runtime environment' },
];

function SkillsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
    };
    return (
        <div className="skills-container">
            <div className="skills-wrapper">
                <Slider {...settings}>
                    {skills.map((skill, index) => (
                        <div className="skills-slide" key={index}>
                            <h2>{skill.name}</h2>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SkillsCarousel;