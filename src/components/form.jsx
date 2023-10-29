import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap'

import InputElement from './inputElement'

import {BiUserCircle, BiEnvelope, BiMobileAlt} from 'react-icons/bi'
import useFetch from '../hooks/useFetch'

export default function ContactForm(){

    const { formData, queue, sending, handleChange, handleSubmit } = useFetch()

    const styles = {
        container: {
            maxWidth: '50%'
        },
        title: {
            marginBottom:'2rem',
        },
        subHeading: {
            color:'#555',
        },
        buttonContainer:{
            width:'fit-content',
            margin:'auto'
        },
        button: {
            borderRadius: '2rem',
            padding:'8px 24px',
        },
        queueStatus:{
            display: queue ? 'block' : 'none',
            fontWeight:500,
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={styles.container}>
            <h1 style={styles.title}>Send us a message</h1>
            <p style={styles.subHeading}>You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.</p>

            <InputElement
                label='Your name'
                id='name'
                icon={<BiUserCircle/>}
                type='text'
                name='name'
                valid={false}
                value={formData.name}
                onChange={handleChange}
                placeholder='Name Here...'
                feedback='Name must include letters'
            />

            <InputElement
                label='Email address'
                id='email'
                icon={<BiEnvelope/>}
                type='email'
                name='email'
                valid={false}
                value={formData.email}
                onChange={handleChange}
                placeholder='Email Here...'
                feedback='Invalid Email'
            />

            <InputElement
                label='Phone'
                id='phone'
                icon={<BiMobileAlt/>}
                type='tel'
                name='phone'
                valid={false}
                value={formData.phone}
                onChange={handleChange}
                placeholder='Number Here...'
                feedback='Invalid phone number'
            />

            <FormGroup>
                <Label for="message">
                    Your message
                </Label>
                <Input
                    id="message"
                    name="message"
                    type="textarea"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className='border-2'
                />
            </FormGroup>

            <div style={styles.queueStatus}>
                <p>You are {queue} in the queue</p>
            </div>

            <div style={styles.buttonContainer}>
                <Button
                    color="primary"
                    type='submit'
                    style={styles.button}
                >
                    {sending ? 'Sending message' : 'Contact Us'}
                </Button>
            </div>
        </Form>
    )
}
