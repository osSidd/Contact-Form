import ContactInfo from "../components/contactInfo"
import ContactForm from "../components/form"

export default function Contact(){

    const styles = {
        container: {
            width:'75%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'start',
            gap:'5rem',
            margin:'5rem auto',
        }
    }

    return(
        <div style={styles.container}>
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}