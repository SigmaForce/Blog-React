const Banner = () => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src="./img/02.png" alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">18 FEV 2021</h6>
          <h6 className="uppercase color-primary text-center">Tecnologia</h6>
          <h3 className="text-center">O que esperar do cinema em 2021?</h3>
          <p className="text-center mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div className="my-3 flex-center">
            <a href="" className="link color-primary">
              Ler Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
