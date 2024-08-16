import { Acorn, CaretDoubleRight } from "@phosphor-icons/react";

export function Navigation() {
  return (
    <header className="bg-[#f9f4fb] h-20 flex items-center ">
      <nav className="flex justify-between items-center w-full px-8">

        <div className="flex items-center">
          <Acorn className="text-[#a076f9]" size={32} />
          <span className="text-[#a076f9]">Mub</span>
          <span className="text-[#894df6]">ak</span>
        </div>

        <div className="flex justify-between w-">
          
          <form className="flex h-full">
            <input
              className="rounded-md border bg-white px-3 w-10/12 text-sm shadow-sm file:bg-transparent file:text-sm file:font-medium focus:border-purple-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 "
              type="search"
              name="search"
              id="search"
              placeholder="search..."
            />
            <label htmlFor="search">
              <CaretDoubleRight className="rounded-md border bg-white text-sm shadow-sm file:bg-transparent file:text-sm size-6 text text-[#a076f9] hover:cursor-pointer ml-1 " />
            </label>
          </form>


          <div className="max-w-36 leading-none text-xs text-[#a076f9]">
            <span >Faça <a className="text-[#894df6] font-medium" href="">LOGIN</a> ou crie seu <a className="text-[#894df6] font-medium" href="">CADASTRO</a>
            </span>
          </div>


        </div>
      </nav>
    </header>
  );
}
