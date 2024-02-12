import { useState } from "react"
export default function FormEmail() {
    const [formData, setFormData] = useState({name: '', email: ''})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    async function postFormData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                title: formData.name
            })
        })

        const jsonRes = await res.json()
        console.log(jsonRes)
    }

    const submitDetails = (e) => {
        e.preventDefault();
        console.log(formData)
        postFormData()
    }

    return (
        <div>
            <form onSubmit={submitDetails} style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                Name: 
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}