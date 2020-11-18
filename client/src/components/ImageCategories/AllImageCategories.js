import React, { useState } from 'react';
import './AllImageCategories.scss';

const AllImageCategories = ({collapsed, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <div id='gallery'>
            <div
                className="collapse-button"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? 'View' : 'Hide'} {children.name}
            </div>
            <div
                className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>

        </div>
    )
}

export default AllImageCategories;