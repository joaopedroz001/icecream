import { UserCircle } from "lucide-react"

export function LandingPage() {
  
  return (
    <div className="flex flex-col items-center">
      <div className="h-28 bg-indigo-950 flex px-56 items-center justify-between w-full">
        <ul className="flex justify-between gap-10">
          <li className="font-medium text-2xl text-white underline-effect border-b-2"><a href="/">Início</a></li>
          <li className="font-medium text-2xl text-white underline-effect"><a href="#">Sorveteria</a></li>
          <li className="font-medium text-2xl text-white underline-effect"><a href="#where-we-are">Onde estamos?</a></li>
        </ul>
        <UserCircle className="text-white cursor-pointer" size={30}/>
      </div>
      
      <main className="flex flex-col items-center mx-52 gap-16">
        <div className="mt-16">
          <h1 className="titleLogo text-8xl font-titleLogo text-yellow-100">Icecream</h1>
          <img src="img/icecream-login-page.png" alt="" className="w-[378px]"/>
        </div>

        <div className="flex justify-between gap-44">
          <div className=" flex flex-col gap-4">
            <h2 className="font-titleLogo text-8xl">Sobre</h2>
            <p className="text-2xl text-justify w-[500px]">Etiam sed tristique est, ut consectetur leo. Nulla facilisi. Etiam scelerisque blandit accumsan. Suspendisse porttitor risus eget congue commodo.
              Etiam posuere turpis in mi bibendum, a finibus lectus laoreet. Curabitur ut neque pretium, venenatis ipsum non, congue nunc. Donec eu dui elementum,
              ultrices odio ac, imperdiet elit. Proin molestie justo non urna sodales, non rutrum turpis congue.
            </p>
          </div>
          <img src="img/ladding-page-sorvete.png" alt="" className="w-1/4"/>
        </div>

        <div className="flex flex-col gap-16 mb-20 w-full">
          <h2 className="font-titleLogo text-8xl leading-tight text-center">Venha conhecer <br/> nossos sabores!</h2>

          <div className="flex justify-around">
            <div>
              <div className="border-4 border-indigo-950 w-96 flex flex-col justify-center items-center rounded-t-3xl h-[550px]">
                <img src="img/açaí.png" alt="" />
              </div>
              <div className="bg-indigo-950 w-full rounded-b-3xl text-center h-28">
                <p className="font-titleLogo text-white text-2xl leading-normal">açaís a partir de <br/><span className="text-[40px]">R$16,00</span></p>
              </div>
            </div>

            <div>
              <div className="border-4 border-indigo-950 w-96 flex flex-col justify-center items-center rounded-t-3xl h-[550px]">
                <img src="img/sorvete.png" alt="" className="w-4/5" />
              </div>
              <div className="bg-indigo-950 w-full rounded-b-3xl text-center h-28">
                <p className="font-titleLogo text-white text-2xl leading-normal">sorvetes a partir de <br/><span className="text-[40px]">R$5,00</span></p>
              </div>
            </div>

            <div>
              <div className="border-4 border-indigo-950 w-96 flex flex-col justify-center items-center rounded-t-3xl h-[550px]">
                <img src="img/picolé.png" alt="" className="w-3/5"/>
              </div>
              <div className="bg-indigo-950 w-full rounded-b-3xl text-center h-28">
                <p className="font-titleLogo text-white text-2xl leading-normal">picolés a partir de <br/><span className="text-[40px]">R$2,50</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="where-we-are" className="w-full flex flex-col gap-20">
          <h2 className="font-titleLogo text-8xl leading-tight text-center">Onde estamos?</h2>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9598487823832!2d-43.94144772401451!3d-19.926096738188463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e6ccb6abb1%3A0x28697dfb766a34c!2sAv.%20%C3%81lvares%20Cabral%2C%20400%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030170-001!5e0!3m2!1spt-BR!2sbr!4v1725319159658!5m2!1spt-BR!2sbr"
            className="w-full h-[700px]">
          </iframe>
      </div>

      <div className="bg-indigo-950 h-48 w-full flex flex-col justify-center items-center gap-8">
        <div className="flex gap-12">
          <a href="https://instagram.com"><img src="img/instagram.png" alt="" className="w-16" /></a>
          <a href="https://web.whatsapp.com"><img src="img/whatsapp.png" alt="" className="w-16" /></a>
          <a href="https://facebook.com"><img src="img/facebook.png" alt="" className="w-16" /></a>
        </div>

        <p className="medium text-2xl text-white">Copyright&copy;2024 | Icecream - Todos os direitos reservados</p>
      </div>
    </div>
  )
}