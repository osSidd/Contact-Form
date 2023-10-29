import ContactInfo from "../components/contactInfo"
import ContactForm from "../components/form"

export default function Contact(){

    // const styles = {
    //     container:{
    //         dislay: 'flex',
            
    //     }
    // }

    return(
        <div style={{display:'flex', gap:'5rem', width:'900px',margin:'5rem auto', alignItems:'start', }}>
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}