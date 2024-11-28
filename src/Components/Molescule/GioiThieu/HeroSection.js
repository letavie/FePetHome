// src/Hero.js

import React from 'react';
import "./HeroSection.css"
import Text from '../../Atom/Text/Text';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content">
                    <Text
                        content={"Giới Thiệu Về PET HOME"}
                        className={"hero-text"}
                    />
                </div>
                <div className="hero-author">
                    <div className='hero-icon'>
                        <PersonIcon />
                        <Text
                            content={"by PetHome"}
                        />
                    </div>
                    <div className="hero-icon">
                        <CalendarMonthIcon />
                        <Text
                            content={"31/5/2024"}
                        />
                    </div>
                    <div className="hero-icon">
                        <AccessTimeIcon/>
                        <Text
                        content={"2:30"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
