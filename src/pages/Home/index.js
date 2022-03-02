//Componentes
/*            <div className="mt-2 flex-space">
                <div className="flex-start-row">
                    <div className="profile">
                        <img src={} className="profile-img" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h6 className="color-primary"> Násser Youssef</h6>
                        <h6 className="color-gray"> Author</h6>
                    </div>
                </div>
            </div>
*/
import Header from "../Header";
import Footer from "../Footer";
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";
//Figuras
import star from "../../svg/icon-star.svg";
//API
import api from "services/api";
//HOOKS
import { useState, useEffect } from "react";

const Home = () => {
  const [main, setMain] = useState([]);
  const [mostseen, setMostseen] = useState([]);
  const [banner, setBanner] = useState([]);
  //FAÇA ISSO QUANDO O COMPONENTE MONTAR
  useEffect(() => {
    //Requisição para posts com nota = 5
    api.get("posts?star=5&_limit=2&_order=desc").then((resp) => {
      setMain(resp.data);
    });
    //Requisição para banner
    api.get("posts?_sort=date&_order=desc&_limit=1").then((resp) => {
      setBanner(resp.data);
    });
    //Posts Mais Vistos
    api.get("posts?_limit=3").then((resp) => {
      setMostseen(resp.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <section className="container">
        <div className="row">
          <div className="grid-5 pt-5  pb-3">
            <img src={star} className="icon-l" alt="" />
            <h2 className="mt-1">
              Os melhores e mais bem votados posts do mês.
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
          </div>
          <div className="grid-7">
            {main.map((item) => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <h3 className="mx-2">Mais Vistos</h3>
        <p className="mx-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>
        <div className="row mt-4">
          {mostseen.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>
      {banner.map((item) => {
        return <Banner key={item.id} content={item} />;
      })}
      <Footer />
    </>
  );
};

export default Home;
