import { ArrowUpDown, ChevronDown, ShoppingCart, UserCircle } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function StorePage() {
  const [isOrderButtonOpen, setIsOrderButtonOpen] = useState(false)

  function changeOrderButtonState() {
    !isOrderButtonOpen ?
    setIsOrderButtonOpen(true) :
    setIsOrderButtonOpen(false)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="h-28 bg-indigo-950 flex px-56 items-center justify-between w-full">
        <ul className="flex justify-between gap-10">
          <li className="font-medium text-2xl text-white underline-effect"><Link to={'/'}>Início</Link></li>
          <li className="font-medium text-2xl text-white underline-effect active"><Link to={'/store'}>Sorveteria</Link></li>
          <li className="font-medium text-2xl text-white underline-effect"><a href="/#where-we-are">Onde estamos?</a></li>
        </ul>
        <UserCircle className="text-white cursor-pointer" size={30}/>
      </div>

      <div className="bg-zinc-900 w-full h-16 flex justify-center items-center">
        <ul className="flex justify-around w-3/4">
          <li className="text-white text-2xl underline-effect"><button>Açaís</button></li>
          <li className="text-white text-2xl underline-effect"><button>Sorvetes</button></li>
          <li className="text-white text-2xl underline-effect"><button>Picolés</button></li>
        </ul>
      </div>
      
      <main className="flex flex-col w-full px-64">
        <div className="py-7">
          <div className="relative bg-stone-300 p-3 rounded-3xl flex flex-col gap-1">
            <button onClick={changeOrderButtonState} className="w-40 font-medium order-button flex justify-center items-center rounded-md p-1 bg-white">
              <ArrowUpDown size={'20px'}/> Ordenar por <ChevronDown />
            </button>
            {isOrderButtonOpen && (
              <div className="absolute top-11 w-40 border-2 z-50 flex flex-col bg-white rounded-md">
                <button className="hover:bg-neutral-200 p-1">Maior preço</button>
                <button className="hover:bg-neutral-200 p-1">Menor preço</button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="shadow-cards rounded-2xl max-w-64">
            <a href="#">
              <div className="w-64 flex flex-col justify-center items-center rounded-t-3xl h-52">
                <div className="w-36 h-20 bg-red-600 flex justify-center items-center">
                  <span className="text-yellow-300 text-3xl">IMAGE</span>
                </div>
                <div className="w-64 flex justify-center items-center rounded-t-xl bg-black opacity-0 h-52 absolute hover:opacity-75 transition-all duration-500">
                  <span className="text-3xl text-white">VER DETALHES</span>
                </div>
              </div>
            </a>

            <div className="w-full bg-slate-500 h-px"></div>

            <div className="flex flex-col gap-2 w-full rounded-b-3xl text-center max-h-80 overflow-hidden p-4 ">
              <p className="text-black cardText h-12 overflow-hidden whitespace-nowrap leading-none font-medium">DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
              <div className="flex justify-between">
                <p className="font-titleLogo text-green-400 text-2xl drop-shadow-price">R$16,99</p>
                <button className="bg-green-400 w-24 rounded-2xl flex justify-center items-center">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-indigo-950 h-48 w-full flex flex-col justify-center items-center gap-8 fixed bottom-0">
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