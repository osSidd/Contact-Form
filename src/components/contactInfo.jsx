import ContactInfoSection from "./contactInfoSection"

export default function ContactInfo(){
    return (
        <div>
            <ContactInfoSection
                title='Find us at the office'
                icon='icon'
            >
                ADSBld Mihail Kogalniceanu, nr.8, <br />
                7652 Bucharest, <br />
                Romania
            </ContactInfoSection>

            <ContactInfoSection
                title='Give us a ring'
                icon='icon'
            >
                Michael Jordan <br />
                <a href="tel:+40762321712">+40 762 321 712</a> <br />
                Mon - Fri, 8:00 - 22:00
            </ContactInfoSection>

            <ContactInfoSection
                title='Legal Information'
                icon='icon'
            >
                XYZ <br />
                VAT &#8226; EN234124SD <br />
                IBAN &#8226; EN8732ENGB23003422 <br />
                BANK &#8226; Great Britain Bank
            </ContactInfoSection>
        </div>
    )
}