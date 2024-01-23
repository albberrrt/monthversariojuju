"use client"

import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Image, { StaticImageData } from "next/image";
import { fiel, grecia, praia, theo } from "@/assets";
import { useState } from "react";

export default function Home() {
  const [productThumb, setProductThumb] = useState<StaticImageData>(grecia)
  const [bought, setBought] = useState<boolean>(false);

  const setProductPressed = (image: StaticImageData) => {
    console.log(productThumb)

    setProductThumb(image)

    console.log(productThumb)
  }

  return (
    <>
      {bought ?
        <div className="absolute flex items-center justify-center w-full h-full">
          <h1 className="text-9xl absolute font-semibold animate-colorful">TE AMO PRINCESAAAA!!!</h1>
          <h1 className="text-9xl absolute animate-ping text-red-400">TE AMO PRINCESAAAA!!!</h1>
        </div> : null}
      <header className="flex min-w-full flex-row items-center justify-between px-12 py-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900">Vendas de Namoração Online Pro!</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex gap-8 justify-center">
          <div className="flex flex-row">
            <div className="flex flex-col gap-1 pr-4">
              <button onClick={() => setProductPressed(grecia)}>
                <Image className="transition ease-in-out hover:opacity-50" alt="grecia" src={grecia} width={120} />
              </button>
              <button onClick={() => setProductPressed(fiel)}>
                <Image className="transition ease-in-out hover:opacity-50" alt="fiel" src={fiel} width={120} />
              </button>
              <button onClick={() => setProductPressed(praia)}>
                <Image className="transition ease-in-out hover:opacity-50" alt="praia" src={praia} width={120} />
              </button>
              <button onClick={() => setProductPressed(theo)}>
                <Image className="transition ease-in-out hover:opacity-50" alt="theo" src={theo} width={120} />
              </button>
            </div>
            <Image alt="Thumb" src={productThumb} width={480}></Image>
          </div>
          <div className="flex flex-col gap-4 w-2/5 text-gray-900">
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl">Relacionamento Vitalício Chiquita Bonita with Albert</h3>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold flex items-center">2.880.000 beijinhos<span className="text-sm pl-2 text-bold text-blue-900"> -50% OFF</span></span>
                <span className="text-base text-gray-950 line-through font=semibold opacity-40">5.760.000 beijinhos</span>
              </div>
              <div>
                <span className="text-sm text-bold text-blue-900">28.800 x de 100 beijinhos sem juros</span>
              </div>
              <AlertDialog>
                <AlertDialogTrigger className="bg-blue-900 text-white py-3 rounded"> Comprar </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-blue-900">Compra realizada!</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-900">
                      Você comprou o relacionamento vitalício com Albert. Agora você pode voltar a desfrutar de todos os seus benefícios! (Leia a <a href="#description" className="text-blue-900 font-semibold">descrição</a> para saber mais)
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="bg-blue-900 text-white" onClick={() => setBought(true)}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>
        <section className="text-gray-900 flex flex-col gap-3 w-3/6 mt-10" id="description">
          <h5 className="text-blue-900 text-lg font-semibold">Descrição</h5>
          <p>Imagine uma vida ao lado de alguém que te ama incondicionalmente. Alguém que sempre estará lá para você, nos bons e nos maus momentos. Alguém que te faz rir, que te faz chorar, que te faz sentir vivo.</p>
          <p>Isso é o que você vai encontrar com o relacionamento vitalício comigo.</p>
          <p>Eu te amo demais Amor.Quero passar o resto da minha vida com você, construindo uma família, viajando o mundo, e criando memórias que durarão para sempre.</p>
          <p>Eu sei que você pode estar pensando: &quot;2880000 beijos é muito caro&quot;. Mas não é. É um investimento no seu futuro. É um investimento em um amor que nunca vai acabar.</p>
          <p>Com o relacionamento vitalício comigo, você terá:</p>
          <ul className="list-disc ml-6">
            <li>Um Amor incondicional</li>
            <li>Um companheiro para a vida toda</li>
            <li>Bolo de fubá vou aprender a fazer te amo</li>
            <li>Muito carinho e amor e massagem</li>
            <li>Uma vida de felicidade e alegria</li>
          </ul>
          <p className="font-bold mt-1">Então, o que você está esperando? Compre agora mesmo e comece a viver com o amor da sua vida.</p>
        </section>
      </main>
    </>
  );
}
