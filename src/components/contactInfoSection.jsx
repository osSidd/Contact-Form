export default function ContactInfoSection({title, icon, children}){
    return (
        <div>
            <div style={{display:'flex', alignItems:'center'}}>
                <span>{icon}</span>
                <h2>{title}</h2>
            </div>
            <address>
                {children}
            </address>
        </div>
    )
}