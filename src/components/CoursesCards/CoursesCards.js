
import React from 'react';

import './CoursesCards.css';

const CoursesCard = ({title}) => {

    return (
        <div className="card">
            <div>
                <p>
                    this is: {title}
                </p>
            </div>
        </div>
    );
}

export default CoursesCard;