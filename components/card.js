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
            <h5 class="text-gray-900 text-justify text-xl font-medium mb-2">Improve your front-end skills by building projects</h5>
            <p class="text-gray-700 text-justify text-base mb-4">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
