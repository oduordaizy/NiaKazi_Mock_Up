'use client'
import Image from 'next/image';
import CompleteNavbar from "@/components/Navigation";
import { useState } from "react";
import PageFooter from '@/components/footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ' ',
        subject: ' ',
        mesage: ' ',
        file: null,
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(formData)
    }

    return(
        <div>
        <div className="contact-container">
            <CompleteNavbar />
            <h1 className="title">Contact us</h1>
            <p>We are here to assist you! Fill out the form below, and we'll get back to you as sson as possible</p>

            <div className='find-us'>
                <div><Image alt="Contact us Image" src="/contact.png" width={400} height={500}></Image></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name: </label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required/>
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="subject"> Subject:</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="support">Support Request</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership Opportunity</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div>
                    <label htmlFor="file">Attach File (Optional)</label>
                    <input type="file" id="file" name="file" onChange={handleChange}/>
                </div>

                <button type="submit" id="submitButton">Send Message</button>

            </form>

            </div>

            <div className="contact-methods">
                <h3>Other Ways to Reach Us</h3>
                <ul>
                    <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><strong>Email:</strong> <a href="mailto:support@niakazi.com">support@niakazi.com</a></li>
                    <li><strong>Follow Us:</strong>
                    <a href="https://www.linkedin.com/company/niakazi" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                </ul>
            </div>

            <div className="location">
                <h3>Our Office Location</h3>
                <address>
                Tatu City, Ruiru
                </address>
                
            </div>

            <div className="faq">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-item">
                    <h4>How do I apply for a job through your system?</h4>
                    <p>To apply for a job, create an account and submit your resume. Browse available positions and apply directly from the job listings.</p>
                </div>
                <div className="faq-item">
                    <h4>How can I update my resume?</h4>
                    <p>You can log into your account and navigate to the 'Profile' section where you can upload a new version of your resume.</p>
                </div>
            </div>

            
            < PageFooter />
 
        </div>
        </div>
        


    )
}

export default Contact;