import React from "react";

interface Service {
  image: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits?: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-11/12 md:w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 text-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {service.title}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500 mb-3">
              {service.longDescription || service.description}
            </p>
            {service.benefits && (
              <>
                <h4 className="text-md font-semibold mb-2">Beneficios:</h4>
                <ul className="text-sm text-gray-500 list-disc list-inside">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none"
              onClick={scrollToContact}
            >
              SOLICITAR PRESUPUESTO
            </button>
            <button
              className="mt-3 px-4 py-2 bg-gray-300 text-gray-900 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
