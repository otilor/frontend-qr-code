import Image from "next/image";

export default function Card() {
  return (
    <>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm p-4">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image
            width={500}
            height = {500}
              className="rounded-lg"
              src="/images/image-qr-code.png"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Improve your front-end skills by building projects</h5>
            <p class="text-gray-700 text-base mb-4">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
