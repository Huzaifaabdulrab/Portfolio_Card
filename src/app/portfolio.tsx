import Image from "next/image";
import huzaifaImg from "../app/public/huzaifaImg.jpeg";

export default function Portfolio_Card() {
  return (
    <div className="mt-60 flex items-center justify-center">
      <div className="main-box max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md md:max-w-2xl sm:max-w-98 sm:px-5">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Huzaifa's Portfolio
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Huzaifa Abdulrab
            </h2>
            <p className="text-gray-600 mt-2">
              Skilled in HTML, CSS, JavaScript, TypeScript, and exploring
              Next.js.
            </p>
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
            <Image
              src={huzaifaImg}
              alt="Huzaifa Abdulrab image"
              width={200}
              height={200}
            />
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center ">
              <p className="mt-4">
                Feel free to contact me at:{" "}
                <a
                  href="mailto:huzaifaabdulrab2@gmail.com"
                  className="text-blue-500"
                >
                  huzaifaabdulrab2@gmail.com
                </a>
              </p>
            </div></div>

    </div>
  );
}
