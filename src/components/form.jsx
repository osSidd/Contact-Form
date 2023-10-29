import {Form, FormGroup, FormText, Label, Input, FormFeedback, Button} from 'reactstrap'

export default function ContactForm(){
    return (
        <Form >
            <h1>Send us a message</h1>
            <p>You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.</p>

            <FormGroup>
                <Label for="name">
                    Your name
                </Label>
                <Input id='name' type='text' name='name' invalid  placeholder='Name Here...'/>
                <FormFeedback>
                    Oh noes! that name is already taken
                </FormFeedback>
                <FormText>
                    Example help text that remains unchanged.
                </FormText>
            </FormGroup>

            <FormGroup>
                <Label for="email">
                    Email Address
                </Label>
                <Input id='email' type='email' name='email' invalid placeholder='Email Here...'/>
                <FormFeedback>
                    Oh noes! that name is already taken
                </FormFeedback>
                <FormText>
                    Example help text that remains unchanged.
                </FormText>
            </FormGroup>

            <FormGroup>
                <Label for="phone">
                    Phone
                </Label>
                <Input id='phone' type='tel' name='phone' invalid  placeholder='Number Here...'/>
                <FormFeedback>
                    Oh noes! that name is already taken
                </FormFeedback>
                <FormText>
                    Example help text that remains unchanged.
                </FormText>
            </FormGroup>

            <FormGroup>
                <Label for="message">
                    Your message
                </Label>
                <Input
                    id="message"
                    name="message"
                    type="textarea"
                />
            </FormGroup>

            <div>
                <Button
                    color="primary"
                >
                    Contact Us
                </Button>
            </div>
        </Form>
    )
}
