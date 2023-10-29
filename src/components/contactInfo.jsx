import ContactInfoSection from "./contactInfoSection"

import {BiBriefcase, BiMap, BiMobileAlt} from 'react-icons/bi'

export default function ContactInfo(){

    const styles = {
        container: {
            maxWidth: '50%',
        },
        anchor: {
            color: '#555',
            textDecoration:'none',
        },
    }

    return (
        <div style={styles.container}>
            <ContactInfoSection
                title='Find us at the office'
                icon={<BiMap/>}
            >
                ADSBld Mihail Kogalniceanu, nr.8, <br />
                7652 Bucharest, <br />
                Romania
            </ContactInfoSection>

            <ContactInfoSection
                title='Give us a ring'
                icon={<BiMobileAlt/>}
            >
                Michael Jordan <br />
                <a style={styles.anchor} href="tel:+40762321712">+40 762 321 712</a> <br />
                Mon - Fri, 8:00 - 22:00
            </ContactInfoSection>

            <ContactInfoSection
                title='Legal Information'
                icon={<BiBriefcase/>}
            >
                XYZ <br />
                VAT &#8226; EN234124SD <br />
                IBAN &#8226; EN8732ENGB23003422 <br />
                BANK &#8226; Great Britain Bank
            </ContactInfoSection>
        </div>
    )
}