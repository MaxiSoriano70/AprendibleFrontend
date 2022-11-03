import Head from "next/head"
import Link from "next/link"
import { Router, useRouter } from "next/router"
import { useState } from "react"
import styles from '../../styles/Home.module.css'

const BookCreate=()=>{
    const router= useRouter();
    const [bookTitle, setBookName] = useState('');
    const [errors, setErrors]=useState([]);
    const [submitting, setSubmitting]=useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setSubmitting(true);
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify({
                title: bookTitle
            })
        });
        if(res.ok){
            setErrors([]);
            setBookName([]);
            return router.push('/libros');
        }
        const data =await res.json();
        setErrors(data.errors);
        setSubmitting(false);
    }

    return (
        <div className={styles.container}>
            <Head>
            <title>Book Crate</title>
            <meta name="description" content="Crear libros" />
            </Head>
            <h1>BookCreate</h1>
            <p>{bookTitle}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e)=>setBookName(e.target.value)}
                    value={bookTitle}
                    disabled={submitting} 
                    type="text"
                    data-cy="input-book-title"
                />
                <button 
                    disabled={submitting }
                    data-cy="button-submit-book"
                >
                    {submitting?'Enviando...':'Enviar'}
                </button>
                {errors.title && (<span style={{color: 'red',display:'block'}}>{errors.title}</span>)}
            </form>
            <Link href="/libros">Book List</Link>
        </div>
    
    )
}

export default BookCreate