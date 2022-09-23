import React, { useState } from 'react';
import classes from './Landing.module.scss';

import {ReactComponent as House1} from '../media/House1.svg';
import {ReactComponent as House2} from '../media/House2.svg';
import {ReactComponent as House3} from '../media/House3.svg';
import {ReactComponent as House4} from '../media/House4.svg';

const Landing = (props) => {
  return (
    <React.Fragment>
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 className={classes.header}> Hi, </h1>
                <h1 className={classes.header}> I'm Ellen </h1>
                <h1 className={classes.subheader}>A hacker by heart</h1>
            </div>
            <div className={classes.houses}>
                <div className={classes.moon}></div>
                <House4 className={classes.housewide}/>
                <House3 className={classes.housewide}/>
                <House2 className={classes.housetall}/>
                <House1 className={classes.housewide}/>
            </div>
        </div> 
    </React.Fragment>
  );
}

export default Landing;