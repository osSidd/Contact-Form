import {FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupText} from 'reactstrap'

export default function InputElement({label, icon, id, type, name, valid, placeholder, feedback, value, onChange}){

    const styles = {
        inputGroup:{
            
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
            display:'none'
        },
    }

    return (
        <FormGroup>
            <Label for={id}>
                {label}
            </Label>
            <InputGroup style={styles.inputGroup} className='border border-2 rounded'>
                <InputGroupText style={styles.inputIcon}>
                    {icon}
                </InputGroupText>
                <Input 
                    style={styles.input} 
                    id={id} 
                    type={type} 
                    name={name} 
                    invalid={valid}
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