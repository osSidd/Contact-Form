import {FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupText} from 'reactstrap'

export default function InputElement({label, icon, id, type, name, invalid, placeholder, feedback, value, onChange}){

    const styles = {
        inputGroup:{
            borderStyle:'solid',
            borderWidth:'2px',
            borderColor: invalid ? '#ff000077' : '#ddd',
            borderRadius:'8px'
        },
        inputIcon:{
            backgroundColor:'white',
            border:'none',
            paddingRight: '0',
        },
        input:{
            border: 'none'
        },
        feedback: {
            display: invalid ? 'block' : 'none'
        },
    }

    return (
        <FormGroup>
            <Label for={id}>
                {label}
            </Label>
            <InputGroup style={styles.inputGroup}>
                <InputGroupText style={styles.inputIcon}>
                    {icon}
                </InputGroupText>
                <Input 
                    style={styles.input} 
                    id={id} 
                    type={type} 
                    name={name} 
                    invalid={invalid}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className='shadow-none'
                />                    
            </InputGroup>
            <FormFeedback style={styles.feedback}>
                {feedback}
            </FormFeedback>
        </FormGroup>
    )
}