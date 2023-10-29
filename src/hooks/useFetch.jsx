import { useState } from "react";

export default function useFetch(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const [queue, setQueue] = useState(0)
    const [sending, setSending] = useState(false)

    function handleChange(e){
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
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
                console.log(data)
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
        handleChange,
        handleSubmit
    }
}