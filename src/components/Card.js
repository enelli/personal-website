import React from 'react';
import classes from './Card.module.scss';

import {ReactComponent as Youtube} from '../media/youtube.svg';
import {ReactComponent as Github} from '../media/github.svg';
import Link from '../media/link.png';

const Card = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.cardText}>
                <h2 className={classes.title}>{props.title}</h2>
                <div className={classes.divider}></div>
                <div className={classes.info}>
                    <p>{props.info.summary}</p>
                    <p>{props.info.responsibilities}</p>
                </div>
                <div className={classes.links}>
                    {props.info.youtube?
                        (<a href={props.info.youtube} target="_blank">
                            <Youtube/>
                        </a>)
                        :
                        (<React.Fragment/>)
                    }

                    {props.info.github?
                        (<a href={props.info.github} target="_blank">
                            <Github/>
                        </a>)
                        :
                        (<React.Fragment/>)
                    }

                    {props.info.link?
                        (<a href={props.info.link} target="_blank">
                            <img src={Link}/>
                        </a>)
                        :
                        (<React.Fragment/>)
                    }
                </div>
                <div className={classes.technologies}>{props.info.technologies.join(', ')}</div>
            </div>
            <a
                href={props.info[`${props.info.default}`]}
                className={classes.imageContainer}>
                <img
                    src={`${props.title}.png`}
                    className={classes.image}/>
            </a>
        </div>
    );
}

export default Card;