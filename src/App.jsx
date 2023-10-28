import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <main className="conent">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </main>
  );
}

export default App;
