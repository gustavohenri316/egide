import { Carousel } from "@/src/components/Carousel";
import { SwitchButton } from "@/src/components/SwitchButton";
import { BsFillRocketTakeoffFill, BsSearch } from "react-icons/bs";
import data from "../../assets/data.json";
import { CardCompany } from "@/src/components/CardCompany";
export default function Home() {
  return (
    <div className="me-4">
      <header>
        <div className="flex items-center gap-20">
          <div>
            <h1 className="text-4xl font-semibold">Bem-vindo!</h1>
            <span className="text-gray-500">Descruba ideias inovadoras</span>
          </div>
          <div className="flex-1 flex gap-4 justify-end ">
            <div className="w-[90%] rounded-3xl h-10 outline-none shadow-sm shadow-gray-700 flex items-center pl-4 gap-4 pr-6 bg-white">
              <BsSearch size={20} fontWeight={400} color="gray" />
              <input
                type="search"
                placeholder="Busque por idéias, projetos ou criadores"
                className=" h-[100%] outline-none w-[100%]"
              />
            </div>
            <button className="bg-gray-50 p-2 rounded-3xl w-24 h-10 shadow-sm shadow-gray-700">
              Entrar
            </button>
            <button className="bg-cyan-500 text-white w-24 h-10  p-2 rounded-3xl shadow-sm shadow-gray-700">
              Registrar
            </button>
          </div>
        </div>
        <div>
          <SwitchButton />
        </div>
      </header>
      <main>
        <section>
          <h3 className="mt-6 text-2xl font-semibold flex items-center gap-4">
            Top ideias da semana <BsFillRocketTakeoffFill />
          </h3>
          <Carousel data={data} />
        </section>
        <section className="mt-20">
          <h3 className="mt-6 text-2xl font-semibold flex items-center gap-4">
            Aplicativos revolucionários 💡
          </h3>
          <Carousel data={data} />
        </section>
        <section className="mt-20">
          <h3 className="mt-6 text-2xl font-semibold flex items-center gap-4">
            Pessoas e empresas que fazem acontecer 🔥
          </h3>
          <CardCompany
            title="Anima educação"
            description="@anima_educacao"
            logo="./anima.png"
            thumbnailUrl_1="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/14522_46B432FE172B975C.jpg?w=876&h=484&crop=1"
            thumbnailUrl_2="https://conteudo.imguol.com.br/c/noticias/4a/2022/08/12/cyberone-robo-humanoide-apresentado-pela-xiaomi-1660341268171_v2_900x506.jpg"
            thumbnailUrl_3="https://pluginbot.ai/wp-content/uploads/2020/10/pepper-1024x576.jpg"
          />
          <CardCompany
            title="Una Betim"
            description="@anima_educacao"
            logo="./download.png"
            thumbnailUrl_1="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/14522_46B432FE172B975C.jpg?w=876&h=484&crop=1"
            thumbnailUrl_2="https://conteudo.imguol.com.br/c/noticias/4a/2022/08/12/cyberone-robo-humanoide-apresentado-pela-xiaomi-1660341268171_v2_900x506.jpg"
            thumbnailUrl_3="https://pluginbot.ai/wp-content/uploads/2020/10/pepper-1024x576.jpg"
          />
        </section>
      </main>
    </div>
  );
}
