import ContactInfo from "../components/contactInfo"
import ContactForm from "../components/form"

export default function Contact(){
    return(
        <div style={{display:'flex', gap:'2rem'}}>
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}