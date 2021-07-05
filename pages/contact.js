import ContactForm from '../components/contact/contact-form.jsx'
import Head from "next/head"
import { Fragment } from 'react'

const ContactPage = () => {
    return (
    <Fragment>
        <Head>
            <title>Contact Me</title>
            <meta name="description" content="Send me an email"></meta>
        </Head>
    
    <ContactForm></ContactForm>
    </Fragment>
    )
}

export default ContactPage
 