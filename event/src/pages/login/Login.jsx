import Logo from "../../assets/img/LogoRosa"
import Botao from "../../components/botao/botao";

const Login = () => {
    <main className="main_login">
        <div></div>
        <section className="selection_login">
        <img src={Logo} alt="LogoRosa"/>
        <form action="" className="form_login">
            <h1>Login</h1>

            <div className="campo_login">
                <div className="campo_imput"> 
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" placeholder="Digite seu Email"/>
                </div>

                <div className="campo_login">
                    <label htmlFor="">Senha</label>
                    <input type="password" name="senha" placeholder="Digite sua senha " />
                </div>
            </div>

            <Botao nomeDoBotao = "Enter"/>
        </form>
        </section>
    </main>

}

export default Login;