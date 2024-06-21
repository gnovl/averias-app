"use client";

import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 lg:px-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center bg-gray-100 p-4 mb-8 rounded-t-lg border-b-2 border-gray-400">
          Contactar
        </h2>
        <p className="text-base text-black font-normal leading-relaxed mb-2">
          Estamos a su disposición para resolver cualquier avería en su hogar.
          Póngase en contacto con nosotros fácilmente a través de WhatsApp:
        </p>
        <p className="text-base text-gray-700 font-light leading-relaxed mb-2">
          <strong>En ordenador:</strong> Pulse "Abrir WhatsApp" para usar la
          versión web o escanee el código QR con su teléfono.
        </p>
        <p className="text-base text-gray-700 font-light leading-relaxed">
          <strong>En móvil:</strong> Pulse "Generar código QR" y luego "Abrir
          WhatsApp" para enviar su mensaje.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
