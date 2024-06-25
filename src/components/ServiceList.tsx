import React, { useState } from "react";
import Modal from "./ServiceModal";
import Image from "next/image";

interface Service {
  image: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits?: string[];
}

const services = [
  {
    image: "/plumber.jpg",
    title: "Fontanería",
    description: "Soluciones integrales para su hogar",
    longDescription:
      "Servicio profesional de fontanería que incluye montaje de accesorios y griferías, localización de averías, y reparación de roturas en tuberías de agua y desagüe. Trabajo eficaz para mantener el sistema de agua de su hogar en óptimas condiciones.",
    benefits: [
      "Respuesta rápida",
      "Detección precisa de fugas y averías",
      "Instalación cuidadosa de griferías y accesorios",
      "Reparaciones efectivas en tuberías",
      "Precios claros y sin sorpresas",
    ],
  },
  {
    image: "/heater.png",
    title: "Calefacción",
    description: "Instalación y mantenimiento de sistemas de calefacción",
    longDescription:
      "Realizamos cambios de radiadores, reemplazo de detectores, instalación de llaves de corte y montaje de componentes. Nuestro experto trabaja para asegurar un sistema de calefacción eficiente y confortable en su hogar",
    benefits: [
      "Mejora en la eficiencia energética",
      "Mayor confort térmico en el hogar",
      "Reducción de costes en facturas de calefacción",
    ],
  },
  {
    image: "/electrical.jpg",
    title: "Electricidad",
    description: "Soluciones eléctricas seguras y eficientes",
    longDescription:
      "Servicios eléctricos que incluyen localización de cortocircuitos, cambio de enchufes e interruptores, instalación de conmutados, casquillos y luces LED. Trabajo preciso para mejorar la seguridad y eficiencia de su instalación eléctrica.",
    benefits: [
      "Diagnóstico rápido de problemas eléctricos",
      "Instalaciones de iluminación modernas y eficientes",
      "Soluciones adaptadas a las necesidades de cada hogar",
    ],
  },
  {
    image: "/painting.png",
    title: "Pinturas",
    description: "Renovación y embellecimiento de interiores",
    longDescription:
      "Ofrecemos servicios profesionales de pintura interior, incluyendo alisado de paredes y aplicación de pinturas plásticas. Realizamos un trabajo cuidadoso para lograr acabados suaves y duraderos que transformarán sus espacios.",
    benefits: [
      "Acabados de alta calidad",
      "Asesoramiento en selección de colores",
      "Preparación adecuada de superficies",
      "Uso de materiales de primera calidad",
      "Trabajo limpio y ordenado",
    ],
  },
  {
    image: "/ceramic_stove.jpg",
    title: "Montaje de Vitrocerámica",
    description: "Instalación profesional de vitrocerámicas",
    longDescription:
      "Disfruta de una cocina moderna con nuestra instalación de vitrocerámica.",
    benefits: [
      "Instalación en menos de 24 horas",
      "Asesoramiento personalizado",
    ],
  },
  {
    image: "/pic_slide (16).jpg",
    title: "Instalación de Plato de Ducha",
    description: "Transforme su baño",
    longDescription:
      "Modernice su baño con nuestro servicio de cambio de bañera por plato de ducha. Este cambio no solo le da un aspecto más actual a su baño, sino que también lo hace más accesible y fácil de limpiar. Realizamos todo el trabajo, desde la demolición hasta los acabados finales.",
    benefits: [
      "Diseños personalizados y modernos",
      "Mejora de la accesibilidad",
      "Gestión completa del proyecto",
    ],
  },
];

const ServiceList = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="flex-shrink-0 mr-3 sm:mr-4">
                <div className="w-16 h-16 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs leading-snug mt-0.5 sm:mt-1 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      </div>
    </section>
  );
};

export default ServiceList;
