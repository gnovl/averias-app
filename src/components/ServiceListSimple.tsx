// ServiceListSimple.tsx
import React from "react";

export type Service = {
  title: string;
};

const services: Service[] = [
  { title: "Servicios de fontanería" },
  { title: "Mantenimiento de calefacción" },
  { title: "Reparación eléctrica" },
  { title: "Pintura de interiores" },
  { title: "Instalación de vitrocerámica" },
  { title: "Cambio a plato ducha" },
];

const ServiceListSimple: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-white rounded-lg"
            >
              <div className="flex-shrink-0 mr-3 sm:mr-4">
                <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-16 lg:h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base group-hover:text-green-600 transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceListSimple;
