import classes from './Projects.module.scss';

import Card from '../components/Card';

const Projects = (props) => {
    const cards = {
        "Veritas": {
            "summary": "Veritas is a Vue based webapp that continues the conversation around police brutality. Users can upload and share police interactions, rate on these interactions, and provide constructive feedback.",
            "responsibilities": "Responsibilities: Website design, Frontend/UI/UX for Map page, add post, map widget, API endpoints for add/edit post",
            "youtube": "https://www.youtube.com/watch?v=-L5ccHFRU3s",
            "link": "https://veritas-nand-gate.herokuapp.com/",
            "github": null,
            "default": "youtube",
            "technologies": ["Vue", "Typescript", "HTML/CSS", "MongoDB", "Vuetify"],
        },
        "Time Changing Lightbox": {
            "summary": "Papercut lightbox that changes colors based on time of day.",
            "responsibilities": "Responsibilities: Cutting lightbox layers, programming ESP32, designing color gradients.",
            "youtube": "https://www.youtube.com/shorts/8gFcIL1LMp4",
            "link": null,
            "github": null,
            "default": "youtube",
            "technologies": ["C++", "ESP32", "Arduino"],
        },
        "Scrapbook":{
            "summary": "Scrapbook is a React based traveling social media. Users can upload and share travel pictures and comments and view travel locations on a globally populated map.",
            "responsibilities": "Responsibilities: Website design, Frontend/UI/UX for Map page and add/edit post, API endpoints for add/get post and backend for upload and downloading images from GCP",
            "github": null,
            "youtube": "https://www.youtube.com/watch?v=9F4QZQ422pg",
            "link": null,
            "default": "youtube",
            "technologies": ["React", "HTML/CSS", "MongoDB", "GCP"]
        }
    }

    return (
        <div className={classes.container}>
            <h2> Projects </h2>
            {Object.entries(cards).map(([key, value]) => (
                <Card key={key} title={key} info={value}/>
            ))}
        </div>
    );
}

export default Projects;