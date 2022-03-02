import { Link } from "react-router-dom";
const Banner = ({ content }) => {
  return (
    <>
      <section className="container">
        <div className="thumb hidden">
          <Link to={"/post/" + content.id}>
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">{content.date} </h6>
          <h6 className="uppercase color-primary text-center">
            {content.category}
          </h6>
          <Link to={"/post/" + content.id}>
            <h3 className="text-center">{content.title} </h3>
          </Link>
          <p className="text-center mt-1">{content.resume}</p>
          <div className="my-3 flex-center">
            <Link to={"/post/" + content.id} className="link color-primary">
              Ler Mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
