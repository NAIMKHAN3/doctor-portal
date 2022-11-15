import React, { useState } from 'react';
import ApoinmentOption from './ApoinmentOption/ApoinmentOption';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';

const AppoinmentPage = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppoinmentBanner>
            <ApoinmentOption
                selected={selected}
            ></ApoinmentOption>
        </div>
    );
};

export default AppoinmentPage;