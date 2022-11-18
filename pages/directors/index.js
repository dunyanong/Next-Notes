import Link from 'next/link';
import styles from '/styles/Directors.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // Props returned will be passed to the page component
    return {
        props: { 
            directors: data 
        }
    }
}

const Directors = ({directors}) => {
    return (
        <div>
            <h1>Directors</h1>
            {directors.map(directors => 
                <Link key={directors.id} href={`directors/${directors.id}`} legacyBehavior>
                    <a className={styles.single}>
                        <h3>{directors.name}</h3>
                        <p>Located at: {directors.address.city}</p>
                        <p>Known for: {directors.company.name} </p>
                    </a>                    
                </Link>  
            )}
        </div>
    );
}
 
export default Directors;