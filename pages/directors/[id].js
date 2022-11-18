export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(directors => {
        return { params: { id: directors.id.toString() } }
    });

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { 
            directors: data 
        }
    }
}

const Details = ({directors}) => {
    return (
        <div>
            <h1>{directors.name}</h1>
            <p>{directors.username}</p>
            <p>{directors.email}</p>
        </div>

    );
}
 
export default Details;