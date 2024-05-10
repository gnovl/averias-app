import Image from 'next/image';


export default function Home() {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 rounded-sm shadow-lg text-center min-h-screen">
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/plumber.jpg" // Replace with your under construction image path
          alt="Under Construction"
          width={600}
          height={200}
          priority
          className="rounded-md"
          style={{ objectFit: "contain", height: "auto" }}
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">AVERIAS HOGAR | PRÓXIMAMENTE</h2>
      <p className="text-lg">
      ¡Actualmente estamos trabajando en algo increíble. ¡Mantente al tanto para el lanzamiento!
      </p>
    </div>
  );
}
