import React from 'react';
import Intro from '../components/intro'
import SectionIntro from '../components/section';
import Footer from '../components/footer';
import Project from '../components/projects';
import ExampleCrud from '../components/example';

function LandingPage() {
    return (
        <div>
            <Intro />
            <SectionIntro />
            <Project />
            <ExampleCrud />
            <Footer />
        </div>
    )
}

export default LandingPage;