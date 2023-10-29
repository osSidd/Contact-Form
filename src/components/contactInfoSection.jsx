export default function ContactInfoSection({title, icon, children}){

    const styles = {
        container:{
            marginTop:'2.5rem',
        },
        header:{
            display:'flex',
            alignItems:'center',
            marginBottom:'1rem',
        },
        title: {
            fontSize:'1.5rem',
            marginTop:'0',
            alignSelf:'flex-end',
            fontWeight:400,
        },
        icon: {
            fontSize:'2rem',
            verticalAlign:'top',
            marginRight:'1.5rem',
            color:'#0d6efd'
        },
        address:{
            marginLeft:'3.5rem',
            color:'#555',
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <span style={styles.icon}>{icon}</span>
                <h2 style={styles.title}>{title}</h2>
            </div>
            <address style={styles.address}>
                {children}
            </address>
        </div>
    )
}