import classes from './Experience.module.scss';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = (props) => {
    const experiences = {
        "Datadog": {
            "title": "Security Research Intern",
            "place": ["New York", "New York"],
            "date": "May 2022 - August 2022",
            "summary": [
                "Reverse engineered malicious PyPI dependencies and presented research on patterns of attack vectors. Designed heuristics to detect common malicious code patterns.",
                "Developed an open source security tool in Python that identifies PyPI malware using researched heuristics. Detected and reported malware found on the PyPI registry."
            ]
        },
        "Microsoft": {
            "title": "Software Engineer Intern",
            "place": ["Cambridge", "Massachusetts"],
            "date": "January 2022",
            "summary": [
                "Reverse engineered malicious PyPI dependencies and presented research on patterns of attack vectors. Designed heuristics to detect common malicious code patterns.",
                "Developed an open source security tool in Python that identifies PyPI malware using researched heuristics. Detected and reported malware found on the PyPI registry."
            ]
        },
        "IBM": {
            "title": "Backend Developer Intern",
            "place": ["Austin", "Texas"],
            "date": "June 2021 - August 2021",
            "summary": [
                "Prototyped integration of Openshift service binding operator into IBM Cloud tekton toolchains, leading to more robust service binding features for IBM Cloud projects.",
                "Redesigned IBM Cloud starter kits by updating homepages, integrating Swagger documentation, and migrating to more modern frameworks, simplifying the starter kit workflow for clients."
            ]
        },
        "RobotAI": {
            "title": "Software Engineer Intern",
            "place": ["Haifa", "Israel"],
            "date": "January 2021 - February 2021",
            "summary": [
                "Developed inspections automation application. Trained convolutional neural networks to detect defective products from image data. Created GUI that enabled data labeling, neural net training, and detection of defective parts in new images."
            ]
        },
        "Applied Materials": {
            "title": "Optical Engineer Intern",
            "place": ["Santa Clara", "California"],
            "date": "June 2020 - December 2020",
            "summary": [
                "Programmed an MTF analysis Python application using OpenCV and Matplotlib that analyzed the MTF of various waveguides. Simplified measurement of waveguide performance and data communication for clients.",
                "Articulated work in MTF measurement to a group of 100 people, including the CTO business unit vice president. Won award for second best presentation."
            ]
        },
        "MIT Media Lab": {
            "title": "Undergraduate Researcher and Programmer",
            "place": ["Cambridge", "Massachusetts"],
            "date": "April 2019 - August 2019",
            "summary": [
                "Collaborated with team of 10 programmers and artists in an AGILE environment to program key features (menu screen, quest dialogue, and guest guidance system) in a virtual reality game designed to teach molecular biology."
            ]
        },
    };

    return (
        <div className={classes.container}>
            <h2> Experience </h2>
            <VerticalTimeline
                layout='1-column'
            >
                {Object.entries(experiences).map(([key, value]) => (
                    <VerticalTimelineElement
                        key={key}
                        className={classes.timelineElement}
                        textClassName={classes.timelineElement}
                        contentStyle={{ 
                            background: 'none', 
                            color: '#fff'
                        }}
                        date={value.date}
                        iconStyle={{ background: 'var(--red)', color: '#fff' }}
                    >
                        <div className={classes.title}>
                            <h3 className="vertical-timeline-element-title">{key}</h3>
                            <h4 className="vertical-timeline-element-title">{value.title}</h4>
                            <h4 className="vertical-timeline-element-subtitle">{value.place[0]}, {value.place[1]}</h4>
                        </div>
                        {value.summary.map((bullet, index) => {
                            return(
                                <p className={classes.summary} key={index}>{bullet}</p>
                            )
                        })}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;