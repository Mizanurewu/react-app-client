import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactUs from './ContactUs/ContactUs';
import Question from './Question/Question';

const ContactPage = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactUs></ContactUs>
            <Question></Question>
            
            
        </div>
    );
};

export default ContactPage;