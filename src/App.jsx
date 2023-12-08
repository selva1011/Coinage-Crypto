import NavBar from "./components/NavBar";
import { ChooseUs, Hero, Join, Market, Footer } from "./pages";

export default function App() {
  return (
    <main className="relative g-main">
      <NavBar />
      <section>
        <Hero />
      </section>
      <section>
        <Market />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
        <Join />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
