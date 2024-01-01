import jsLogo from "../assets/javascript-js-seeklogo.com.svg";
import reactLogo from "../assets/react-seeklogo.com.svg";
import nodeLogo from "../assets/nodejs-seeklogo.com.svg";
import mongodbLogo from "../assets/mongodb-seeklogo.com.svg";
import tailwindLogo from "../assets/tailwind-css-wordmark-seeklogo.com.svg";
import expressLogo from "../assets/express-js-seeklogo.com.svg";

export const MyTechSection = () => {
  return (
    <section className="snap-start flex p-32 gap-11 border-b-4 border-black bg-bright-purple justify-center items-center">
        <div>
            <h1 className="text-3xl">Tech I'm</h1>
            <h1 className="text-3xl">enthusiastic about</h1>
            <p>Sometimes all i think about is you Late</p>
            <p>nights in the middle of june</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center">
              <img src={jsLogo} alt="" />
            </div>
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center">
              <img src={reactLogo} alt="" />
            </div>
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center p-2">
              <img src={nodeLogo} alt="" />
            </div>
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center">
              <img src={expressLogo} alt="" />
            </div>
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center p-2">
              <img src={mongodbLogo} alt="" />
            </div>
            <div className="bg-white shadow-dark-shadow border-2 border-black max-w-150px flex justify-center items-center p-2">
              <img src={tailwindLogo} alt="" />
            </div>
        </div>
    </section>
  )
}