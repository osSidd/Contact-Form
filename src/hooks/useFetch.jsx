import { useState } from "react";

export default function useFetch(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const [validate, setValidate] = useState({
        name: {invalid: true, regex: /^[a-zA-Z\s]+$/},
        email: {invalid: true, regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/},
        phone: {invalid: true, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i}
    })

    const [queue, setQueue] = useState(0)
    const [sending, setSending] = useState(false) 

    function handleChange(e){
        const {name, value} = e.target

        setValidate(prev => {
           if(name === 'message') return prev
            return {
            ...prev,
            [name]: {
                regex: prev[name].regex,
                invalid: !prev[name].regex.test(value)
            }}
        })

        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function isValid(){
        return !validate.name.invalid && !validate.email.invalid && !validate.phone.invalid
    }
    
    async function handleSubmit(e){
        e.preventDefault()
        setSending(true)

        const myHeaders = new Headers();
        myHeaders.append("apikey", "1hPWgDeQjPQTriKYlahWy1F594Hn16tj");

        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body:JSON.stringify(formData)
        };

        try{
            if(isValid()){
                const response = await fetch("https://api.apilayer.com/mem_db/lpush/{react-assignment}", requestOptions)
            
            if(response.ok){
                const data = await response.json()
                setQueue(data.items)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                alert('Data sent successfully')
            }
        }
            setSending(false)
        
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        formData,
        queue,
        sending,
        validate,
        handleChange,
        handleSubmit
    }
}