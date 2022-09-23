import React from 'react';
import classes from './Introduction.module.scss';

const Introduction = (props) => {
  return (
    <div className={classes.wave}>
        <svg
        width="100%" 
        height="200px" 
        fill="none" 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeWidth="5"
            fill= "#1C1E5B"
            stroke="#FE6D73" 
            d="
                M 0 67
                C 273,183
                822,-41
                1920.01,106 
                V 359 
                H 0 
                V 67
                Z">
            </path>
        </svg>
        <div className={classes.container}>
            <img
                className={classes.profile} 
                src="profile.jpg"/>
            <div className={classes.greeting}>
                <p>
                    Nice to meet you!
                </p>
                <p>
                    I am a Master's student
                    graduating from MIT in May
                    2023 with a concentration
                    in computer systems.

                    I am a software engineer
                    with passions spanning
                    full stack development,
                    security, and machine
                    learning. Outside of work,
                    I love to bake, paint, and
                    game.
                </p>
                
                <a href="https://www.linkedin.com/in/ellen-wang-4bb5961a0/" target="_blank"> Let’s connect! </a>
            </div>
        </div>
    </div>
  );
}

export default Introduction;
