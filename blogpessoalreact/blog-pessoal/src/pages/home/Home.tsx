import './Home.css';

interface testeProps {
    title: string;
    description: string;
  }
  
function Home(props:testeProps){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}

export default Home;