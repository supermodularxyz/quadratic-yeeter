import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <main
      className={`flex mt-56 flex-col max-w-md mx-auto items-center justify-center`}
    >
      <div className='flex flex-1 flex-col p-6 py-10 rounded-xl bg-brand-dark'>
        <div className="mb-8 text-left">
          <h1 className='text-4xl font-bold text-brand-green'>Yeet</h1>
          <h4 className="text-white italic mt-1">(v.) To throw something very very hard very very fast</h4>
        </div>
        <div className="w-full mb-4 rounded-md text-white">
          <div className='mb-4 italic'>
            This tool is a Quadratic Yeeter.  It&apos;s a way to launch a <a href="https://round-manager.gitcoin.co/" className="text-brand-green" target="_blank">QF Grants Round</a> in only a couple clicks (as compared to the dozens of clicks required in the default Gitcoin Grants Stack flow)
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Button asChild className="w-[200px] rounded-full py-4">
            <Link href="/yeet">Yeet A Round</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Home