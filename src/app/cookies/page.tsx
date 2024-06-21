import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <section className="py-20 px-4 lg:px-20 bg-white">
      <div className="container mx-auto text-center">
        <div className="mb-8 text-left">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            ← Volver a Inicio
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Política de Cookies
        </h2>
        <p className="mb-4">
          Utilizamos cookies en nuestro sitio web para mejorar su experiencia de
          navegación. Esta política explica qué son las cookies, cómo las usamos
          y cómo puede gestionarlas.
        </p>
        <p className="mb-4">
          Al continuar usando nuestro sitio, usted acepta el uso de cookies
          según lo descrito aquí. Puede cambiar la configuración de cookies en
          cualquier momento a través de su navegador.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          ¿Qué son las Cookies?
        </h3>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo cuando visita un sitio web. Nos ayudan a recordar sus
          preferencias y a entender cómo usa nuestro sitio.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Tipos de Cookies que Usamos
        </h3>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto mb-4">
          <li>Cookies esenciales: Para el funcionamiento básico del sitio</li>
          <li>Cookies funcionales: Para recordar sus preferencias</li>
          <li>Cookies analíticas: Para entender cómo se usa nuestro sitio</li>
          <li>Cookies publicitarias: Para mostrar anuncios relevantes</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Cómo Gestionamos las Cookies
        </h3>
        <p className="mb-4">
          Nos aseguramos de que todas las cookies se usen de manera transparente
          y ética. No compartimos datos personales recopilados a través de
          cookies con terceros sin su consentimiento.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Control de Cookies
        </h3>
        <p className="mb-4">
          Puede controlar y eliminar cookies a través de la configuración de su
          navegador. Sin embargo, tenga en cuenta que bloquear todas las cookies
          puede afectar su experiencia en nuestro sitio.
        </p>
        <p className="mb-4">
          Si desea más información sobre cómo gestionamos las cookies o desea
          cambiar sus preferencias, no dude en contactarnos.
        </p>
        <p className="mt-8 text-sm text-gray-600">
          Última actualización: 4 de junio de 2024
        </p>
      </div>
    </section>
  );
}
