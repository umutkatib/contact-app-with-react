import { useState, useEffect } from 'react'

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form( {addContact, contacts} ) {

    const [form, setForm] = useState(initialFormValues);

    
    useEffect(() => {
        setForm(initialFormValues);  //formu use effect ile sıfırlar
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();  

        if(form.fullName === "" || form.phoneNumber === "") {
            return false;
        }

        addContact([...contacts, form]);

    }

  return ( 
        <form onSubmit={onSubmit}>
            <div>
                <input
                name='fullName'
                value={form.fullName}
                placeholder='Full Name' 
                onChange={onChangeInput} />
            </div>

            <div>
                <input 
                name='phoneNumber' 
                value={form.phoneNumber}
                placeholder='Phone Number' 
                onChange={onChangeInput} />
            </div>

            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
  )
}

export default Form;
