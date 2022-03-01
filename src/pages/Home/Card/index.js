const Card = () => {
  return (
    <>
      <div class="grid-4 card p-0">
        <div class="thumb hidden">
          <a href="">
            <img src="./img/01.png" alt="" />
          </a>
        </div>
        <div class="mt-2 px-2">
          <h6 class="color-gray">18 FEV 2021</h6>
          <h6 class="uppercase color-primary">Tecnologia</h6>
          <h4>O que esperar do cinema em 2021?</h4>
          <p class="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <div class="my-3">
            <a href="" class="link color-primary">
              Ler Mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
