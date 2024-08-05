import { CiMail } from "react-icons/ci";
export default function Header(){
    return(
        <header className="sticky top-0 bg-neutral-700 flex items-center justify-center h-16">
        <div className="flex items-center">
          <CiMail className="text-4xl text-white" />
          <h1 className="text-white font-bold text-xl ml-2">
            REACHINBOX
          </h1>
        </div>
      </header>
    );
}