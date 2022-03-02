import Header from "pages/Header";
import Footer from "pages/Footer";
import logo from "../../svg/blog-logo2.svg";
const Login = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <div className="flex-center">
              <img src={logo} className="icon-l" alt="" />
            </div>
            <h5 className="text-center">Olá Faça o Login para continuar.</h5>

            <form>
              <input
                type="text"
                name="user"
                className="mt-3"
                placeholder="Digite seu usuário"
              />
              <input
                type="password"
                name="pasword"
                className="mt-2"
                placeholder="Digite sua senha"
              />
              <button className="btn w-100 mt-4">Entrar</button>
            </form>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
