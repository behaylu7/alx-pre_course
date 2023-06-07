import EmailList from "../../Componentes/EmailList/EmailList";
import Featured from "../../Componentes/Featured/Featured";
import FeaturedProperties from "../../Componentes/FeaturedProperties/FeaturedProperties";
import Footer from "../../Componentes/Footer/Footer";
import Header from "../../Componentes/Header/Header";
import Navbar from "../../Componentes/Navebar/Navbar";
import PropertesList from "../../Componentes/ProperteyList/PropertesList";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by properties type</h1>

        <PropertesList />

        <h1 className="homeTitle">Homes gustes love</h1>
        <FeaturedProperties />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
