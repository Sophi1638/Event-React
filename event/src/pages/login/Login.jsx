import Logo from "../../assets/img/imagemLogin.png"
import "./Login.css";
import Botao from "../../components/botao/botao"

const Login = () => {
  return (
    <main className="main_login">
        <div className="banner"></div>
            <section className="section_login">
                <form action="" className="form_login">
                <img src={Logo} alt="" />
                        <div className="campos_login">
                            <div className="campo_input">
                                <input type="email" name="email" placeholder="UserName"/>
                            </div>
                            <div className="campo_input">
                                <input type="senha" name="senha" placeholder="Password"/>
                            </div>
                        </div>
                        <a href="">Esqueceu sua senha</a>
                        <Botao nomeDoBotao="Login"/>
                </form>
            </section>
    </main>
  )
}

export default Login;































// import "./Login.css"
// import Botao from "../../components/botao/botao";

// const Login = () => {
//     return(
//     <main className="main_login">
//         <div></div>
//         <section className="selection_login">
//         <form action="" className="form_login">
//             <h1>Login</h1>

//             <div className="campo_login">
//                 <div className="campo_imput"> 
//                     <label htmlFor="">Email:</label>
//                     <input type="email" name="email" placeholder="Digite seu Email"/>
//                 </div>

//                 <div className="campo_login">
//                     <label htmlFor="">Senha</label>
//                     <input type="password" name="senha" placeholder="Digite sua senha " />
//                 </div>
//             </div>

//             <Botao nomeDoBotao = "Enter"/>
//         </form>
//         </section>
//     </main>
// )
// }

// export default Login;