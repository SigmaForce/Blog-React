import Header from "pages/Header";
import Footer from "pages/Footer";

import logo from "../../svg/blog-logo.svg";

const About = () => {
  return (
    <>
      <Header />
      <section className="container ">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
            <p className="mt-1">
              O blog é um projeto desenvolvido em ReactJS para o curso
              FrontPush. Clique Abaixo para mais informações.
            </p>
            <a href="" className="btn mt-4">
              {" "}
              Saber Mais
            </a>
          </div>
          <div className="grid-6 ">
            <img src={logo} className="ilustration" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
