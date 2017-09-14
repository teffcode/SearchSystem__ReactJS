
import React from 'react';

import './CoursesCards.css';

const CoursesCard = ({title, provider, description}) => {

    return (
        <div className="card">
            <div>
                <p>
                    {title}
                </p>
                <p>
                    {provider}
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CoursesCard;