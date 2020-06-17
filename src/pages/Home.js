import React from 'react';
import Hero from '../components/hero-section/Hero';
import TestimonialCard from '../components/testimonials/Testimonial';
import Cards from '../components/cards/Cards';
import { HomepageButton } from '../components/cards/CardsStyles';
import Button from '../components/home-button/Button';
import Mission from '../components/Mission/Mission';

const Home = () => (
    <div>
    <Hero />
    <Cards/>
    <TestimonialCard />
    <Mission />
    <HomepageButton><Button>SHOP NOW</Button></HomepageButton>
    
    </div>
)

export default Home