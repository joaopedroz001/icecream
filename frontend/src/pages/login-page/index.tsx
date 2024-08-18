import { User, EyeOff, Eye } from "lucide-react"
import { FormEvent, useState } from "react"

export function LogInPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function sendData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    alert('Logado(a)!')
  }

  function enableIsPasswordVisible() {
    setIsPasswordVisible(true)
  }

  function disableIsPasswordVisible() {
    setIsPasswordVisible(false)
  }

  return (
    <div className="flex h-screen">
      <div className="bg-indigo-950 w-1/2 h-full flex flex-col justify-center items-center rounded-login">
        <h1 className="titleLogo text-9xl font-titleLogo text-yellow-100">Icecream</h1>
        <img src="img/icecream-login-page.png" alt="" className="w-[472px]"/>
      </div>

      <form onSubmit={sendData} className="flex flex-col justify-center items-center flex-1 gap-24">
        <h2 className="text-8xl font-medium">Entrar</h2>

        <div className="border-b border-black flex justify-between items-center w-[500px] pb-1.5">
          <input type="email" placeholder="E-mail" name="email" className="outline-none text-2xl w-full valid:bg-transparent"/>
          <User className="opacity-50"/>
        </div>

        <div className="flex flex-col items-end">
          <div className="border-b border-black flex justify-between items-center w-[500px] pb-1.5">
            <input 
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Senha"
              name="password"
              className="outline-none text-2xl w-full"
            />
            {!isPasswordVisible ? (
              <EyeOff onClick={enableIsPasswordVisible} className="opacity-50 cursor-pointer"/>
            ) :
            ( 
              <Eye onClick={disableIsPasswordVisible} className="opacity-50 cursor-pointer"/>
            )
            }
          </div>
          <a 
            href="/forgotmypassword"
            className="text-indigo-950 hover:text-indigo-500 duration-500 font-medium cursor-pointer"
          >esqueci minha senha</a>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button 
            className="w-[500px] bg-indigo-950 hover:bg-indigo-500 duration-500 h-14 text-xl font-medium text-white rounded-xl">Entrar</button>
          <a href="signup" className="font-medium text-indigo-950 hover:text-indigo-500 duration-500">Cadastrar-se</a>
        </div>
      </form>
    </div>
  )
}