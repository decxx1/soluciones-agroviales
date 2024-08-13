import { Toaster, toast } from 'sonner'
import axios from 'axios';
import { useState } from 'react';
import { 
    secretKey,
    siteKey,
    endPoint,
    email
} from '@/hooks/env.js';

export default function Form () {
    const [isSending, setIsSending] = useState(false);
    const resetForm = () => {
        document.getElementById('contactForm').reset();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const fields = Object.fromEntries(new FormData(event.target))
        fields.secret_key = secretKey;
        fields.addressee = email;
        fields.asunto = "Contacto desde la web - de: " + fields.name;
        if(!isSending){
            setIsSending(true);
            grecaptcha.ready(function() {
                grecaptcha.execute(siteKey, { action: 'contacto' }).then(function(getToken) {
                    fields.token = getToken;
                    sendForm(fields);
                });
            });
        }
    }
    const sendForm = (fields) => {
        axios.post(endPoint, fields, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            toast.success('Tu mensaje fue enviado correctamente')
            resetForm()
        })
        .catch(error => {
            //console.error(error)
            toast.error('No se pudo enviar el mensaje vuelva a intentarlo más tarde.')
        })
        .finally(() => {
            setIsSending(false);
        })
    }
    return (
        <form onSubmit={handleSubmit} method="post" id="contactForm" className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
            <Toaster richColors position="top-right" />
            <div className="sm:col-span-2">
                <label forhtml="first-name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Nombre</label>
                <input type="text" id="first-name" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nombre" required/>
            </div>
            <div>
                <label forhtml="telphone" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Teléfono</label>
                <input type="number" id="telphone" name="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Teléfono" required/>
            </div>
            <div>
                <label forhtml="email" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">E-mail</label>
                <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="E-mail" />
            </div>
            
            <div className="sm:col-span-2">
                <label forhtml="message" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400">Mensaje</label>
                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deje su consulta..." required></textarea>
            </div>
            <button disabled={isSending} type="submit" className="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded bg-primary-300 sm:w-fit hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:ring-primary-400 dark:text-gray-800">Enviar mensaje</button>
        </form>
    )
}