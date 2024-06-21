import Link from "next/link";

export default function PrivacyPolicy() {
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
          Política de Privacidad
        </h2>
        <p className="mb-4">
          En nuestra empresa, respetamos su privacidad y estamos comprometidos a
          proteger sus datos personales. Esta política de privacidad explica
          cómo recopilamos, usamos y protegemos su información.
        </p>
        <p className="mb-4">
          Al utilizar nuestros servicios, usted acepta las prácticas descritas
          en esta política. Nos aseguramos de que su información esté segura y
          solo se use para mejorar su experiencia.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Información que Recopilamos
        </h3>
        <p className="mb-4">
          Podemos recopilar información personal como su nombre, dirección de
          correo electrónico, número de teléfono y dirección cuando se pone en
          contacto con nosotros o solicita nuestros servicios.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Cómo Usamos Su Información
        </h3>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto mb-4">
          <li>Para comunicarnos con usted y responder a sus consultas</li>
          <li>Para programar y realizar servicios de reparación</li>
          <li>Para enviarle actualizaciones sobre nuestros servicios</li>
          <li>Para mejorar nuestros servicios basándonos en sus comentarios</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Protección de Datos
        </h3>
        <p className="mb-4">
          Implementamos medidas de seguridad adecuadas para proteger su
          información contra acceso no autorizado, alteración, divulgación o
          destrucción. Solo nuestro personal autorizado tiene acceso a sus
          datos.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Sus Derechos
        </h3>
        <p className="mb-4">
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal. Si desea ejercer estos derechos o tiene preguntas sobre
          nuestra política de privacidad, por favor contáctenos.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Servicios Esenciales
        </h3>
        <p className="mb-4">
          Utilizamos Google reCAPTCHA como un servicio esencial para proteger
          nuestro sitio web contra el spam y el abuso. Google reCAPTCHA
          establece cookies que son necesarias para su funcionamiento adecuado.
          Al utilizar nuestro sitio web, usted acepta el uso de Google reCAPTCHA
          y el establecimiento de estas cookies esenciales.
        </p>
        <p className="mt-8 text-sm text-gray-600">
          Última actualización: 19 de junio de 2024
        </p>
      </div>
    </section>
  );
}
