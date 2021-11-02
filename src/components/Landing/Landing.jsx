import React, {memo} from 'react';

import FirstScreen from './FirstScreen';
import OurPrograms from './OurPrograms';
import ProjectBoard from "../ProjectBoard";
import WhyShouldSacrifice from "./WhyShouldSacrifice";
import CompletedProjects from "../CompletedProjects";
import Contacts from './Contacts';


const Landing = () => {
    return (
        <div>
            <FirstScreen />
            <OurPrograms />
            <ProjectBoard
                title='Активні проекти'
                variant='active'
            />
            <WhyShouldSacrifice/>
            <CompletedProjects title='Завершені проекти' />
            <Contacts/>
        </div>
    );
};

export default memo(Landing);
