/*
-----------------------------------------------------------------------------------------------------
Next.js Tutorial #1 - Introduction & Setup
-----------------------------------------------------------------------------------------------------
How to create a new nextjs application?
npx create-next-app

How to run nextapp locally?
npm run dev

api folder for managing API

Server-Side-Rendering:
The server renders the component and sends the html file to the browser

All our different root components are renderred right in the _app.js

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #2 - Pages & Routes
-----------------------------------------------------------------------------------------------------
treat index.js as your App.js in react, where most of the components are put into.
index.js is also your homepage by default

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #3 - Other Components
-----------------------------------------------------------------------------------------------------
It is always a good idea to have a directory which stores the components



-----------------------------------------------------------------------------------------------------
Next.js Tutorial #4 - Linking Between Pages
-----------------------------------------------------------------------------------------------------
link component for client side rendering which increases the speed it reloads

To intialise Link:
import Link from 'next/link'

<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/list">Listing</Link>

all the links in href are linked to the component functions. 
Hence, the components classes must be in capital letter.

If you wnat anchor tag inside Link tags, you must add a legacyBehavior attribute(Look at documentation)

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #5 - Creating a Layout Component
-----------------------------------------------------------------------------------------------------
Aim: 
To turn Footer and Navbar into a single component.
This makes the codes cleaner and more organised overall.

1) Create a Layout component
2) Inside the layout component add the Footer and Navbar component

Which looks something like this:
const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

children property is anything
inside the component of <Component {...pageProps} />
<Component {...pageProps} /> part represents all other pages

3) In _app.js file:
Add the Navbar and the Footer in between the components
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #6 - Adding Styles
-----------------------------------------------------------------------------------------------------
Ways to style:
1) Global stylesheet
2) CSS modules

1) Global stylesheet:
Global stylesheet is the globals.css

2) CSS modules:
-> Remember, each component has their own stylesheet scope.
-> Format: ComponentNameOnInitialCapitalLetter.module.css
-> All must be classes in css!

In index.js:
className={stylesHome} for dynamics value where 
import stylesHome from '/styles/Home.module.css'

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #7 - Custom 404 Page
-----------------------------------------------------------------------------------------------------
->404.js is a specially named file much like the index.js file
->This does not generate url which is /404
->Instead, it creates a component which is like a catch method,
any unknown routes will be directed to this file by default in next

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #8 - Redirecting Users
-----------------------------------------------------------------------------------------------------
useEffect and useRouter hook is used

useRouter hook is from nextjs framework.

Mechanism of useRouter:
-> const route = useRouter();
-> useRouter is a function that returns router object.
-> Router object provides many info (check in documentation)

router.push()
-> Handles client-side transitions, this method is useful for cases where next/link is not enough.

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #10 - Fetching Data (getStaticProps)
-----------------------------------------------------------------------------------------------------
JSON placeholder is good for testing dummy API

getStaticProps function never runs in the 
browser only built-time so don't write any codes
that you would expect run in the browser.

export const getStaticProps = async () => {
    // fetch and res.json() are both promises 
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); <--- endpointis the link
    const data = await res.json();
}
Notes for asynchronous programming:
-> The response object, returned by the await fetch(), is a generic placeholder for multiple data formats.
-> response.json() returns a promise resolved to a JSON object

For more info about asynchronous programming
https://dmitripavlutin.com/javascript-fetch-async-await/ 

Example:
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
                <div key={directors.id}>
                    <a>
                        <h3>{directors.name}</h3>
                    </a>
                </div>  
            )}
        </div>
    );
}
 
export default Directors;

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #11 - Dynamic Routes (part 1)
-----------------------------------------------------------------------------------------------------
[id].js
square bracket meaning the route parameter can be changed.

-----------------------------------------------------------------------------------------------------
Next.js Tutorial #12 - Dynamic Routes (part 2)
-----------------------------------------------------------------------------------------------------
getStaticPaths() for generating new pages that are quite similar.


-----------------------------------------------------------------------------------------------------
Next.js Tutorial #13 - Fetching a Single Item
-----------------------------------------------------------------------------------------------------































*/