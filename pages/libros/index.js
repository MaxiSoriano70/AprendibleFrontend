import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Home.module.css'

export async function getStaticProps(){
    //Conectamos Api
    const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)
    //Traemos los datos
    const data=await res.json();
    return{
        props:{
            books:data
        }
    }
}

const BookList=({books})=>{
    async function handleDelete(e, bookId){
        e.preventDefault();
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${bookId}`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify({
                _method: 'DELETE'
            })
        });
        if(res.ok){
            window.location.href='/libros';
        }
    }
    return (
        <div className={styles.container}>
            <Head>
            <title>Books</title>
            <meta name="description" content="Index de libros" />
            </Head>

            {/*Muestro lo que traigo de la api*/}
            {/*<pre>{JSON.stringify(books)}</pre>*/}


            <h1>Libros</h1>
            <ul data-cy="book-list">
                {books.map(book =>(
                    <li key={`book-${book.id}`}>
                        <Link 
                            href={`/libros/${book.id}`}
                            data-cy={`link-to-visit-book-${book.id}`}
                        >
                            {book.title}
                        </Link>
                        {' - '}
                        <Link 
                            href={`/libros/${book.id}/editar`}
                            data-cy={`link-to-edit-book-${book.id}`}
                        >
                            Editar
                        </Link>
                        {' - '}
                        <form onSubmit={(e)=>handleDelete(e,book.id)} style={{display:'inline'}}>
                            <button
                            data-cy={`button-to-delete-book-${book.id}`}
                            >
                                Eliminar
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
            <Link href="/libros/crear">Create Book</Link>
            <br></br>
            <Link href="../">Principal</Link>
        </div>
    
    )
}

export default BookList