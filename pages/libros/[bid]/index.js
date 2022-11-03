import Head from "next/head"
import Link from "next/link"
import styles from '../../../styles/Home.module.css'

export async function getStaticProps({params}){
    //Conectamos Api
    const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${params.bid}`);
    //Traemos los datos
    const data=await res.json();
    return{
        props:{
            book:data  
        }
    }
}

export async function getStaticPaths(){
    //Conectamos Api
    const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)
    //Traemos los datos
    const data=await res.json();
    return{
        paths: data.map(book=>(
            {params:{bid:String(book.id)}}
            )),
        fallback: false
    }
}

const BookDetail=({book})=>{
    return (
    <div className={styles.container}>
      <Head>
        <title>Book Detail</title>
        <meta name="description" content="Detalle del libro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{book.title}</h1>
      <Link href="/libros">Book List</Link>
    </div>    
    )
}

export default BookDetail