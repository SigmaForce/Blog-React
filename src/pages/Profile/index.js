import Header from "pages/Header";
import Footer from "pages/Footer";
const Profile = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src="./profile/ny.png" className="profile-img" alt="" />
              </div>
              <div className="ml-3">
                <h3>Leonardo Lucas Roman de Matos</h3>
                <h6 className="color-gray">Author</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-6 flex-center">
            <a href="" className="btn">
              Meus Dados
            </a>
            <a href="" className="btn ml-3">
              {" "}
              Adicionar Posts
            </a>
          </div>
        </div>
      </section>
      <section className="container">
        <h3>Adicionar um novo Post</h3>
        <p className="mt-1">
          Preencha os campos abaixos para adicionar um novo post.
        </p>

        <form>
          <div className="row">
            <div className="grid-3 p-0">
              <label for="date">
                <h6>Data</h6>
              </label>
              <input type="date" id="data" name="date" className="mt-1" />
            </div>
            <div className="grid-3 p-0">
              <label for="category">
                <h6>Categoria</h6>
              </label>
              <select id="category" name="category" className="mt-1">
                <option value="tecnologia">tecnologia</option>
                <option value="games">games</option>
                <option value="cinema">cinema</option>
                <option value="fotografia">fotografia</option>
              </select>
            </div>
            <div className="grid-6 p-0">
              <label for="title">
                <h6>Titulo</h6>
              </label>
              <input type="text" id="title" name="title" className="mt-1" />
            </div>

            <div className="row">
              <div className="grid-9 p-0">
                <label for="resume">
                  <h6>Resumo</h6>
                </label>
                <input type="text" id="resume" name="resume" className="mt-1" />
              </div>
              <div className="grid-3 p-0">
                <label for="duration">
                  <h6>Duração</h6>
                </label>
                <select id="duration" name="duration" className="mt-1">
                  <option value="5">5min.</option>
                  <option value="7">7min.</option>
                  <option value="10">10min.</option>
                  <option value="15">15min.</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="grid-12">
                <label for="description">
                  <h6>Descrição</h6>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="w-100"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="row flex-end-row">
              <button className="btn mr-2">Adicionar</button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
