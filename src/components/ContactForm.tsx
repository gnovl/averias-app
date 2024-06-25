import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const qrCodeContainerRef = useRef<HTMLDivElement | null>(null);

  const yourWhatsappNumber = "34123123123"; // Replace with your Spanish WhatsApp number
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateSpanishPhone(phone);
    setIsValidPhone(isValid);

    if (!recaptchaToken) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    if (isValid) {
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message, recaptchaToken }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert(
            data.error ||
              "Error al enviar el formulario. Por favor, inténtalo de nuevo."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error de red. Por favor, inténtalo de nuevo.");
      } finally {
        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaToken(null);
      }
    }
  };

  useEffect(() => {
    if (isSubmitted && qrCodeContainerRef.current) {
      const rect = qrCodeContainerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offsetY = rect.top + scrollTop - window.innerHeight / 9; // Adjust this value to change the scroll offset

      window.scrollTo({
        top: offsetY,
        behavior: "smooth",
      });
    }
  }, [isSubmitted]);

  const validateSpanishPhone = (phoneNumber: string) => {
    // Remove any non-digit characters
    const digits = phoneNumber.replace(/\D/g, "");
    // Spanish mobile numbers start with 6, 7, or 9 and have 9 digits
    const spanishMobileRegex = /^(6|7|9)\d{8}$/;
    return spanishMobileRegex.test(digits);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const whatsappMessage = `👤 Nombre: ${name}
📧 Email: ${email}
📱 Número de WhatsApp: +34${phone}

📝 Mensaje:
${message}`;
  const whatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="flex items-center justify-center min-h-screen px-2 py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-xl md:max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Tu Número de WhatsApp
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  +34
                </span>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="612 345 678"
                  pattern="[0-9]{9}"
                  className={`w-full h-12 pl-12 pr-4 rounded-lg border-2 ${
                    isValidPhone
                      ? "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                      : "border-red-500 focus:border-red-500 focus:ring-red-200"
                  } text-base outline-none transition-colors duration-200 ease-in-out`}
                  required
                  title="Por favor, ingresa un número móvil español válido (9 dígitos)"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Ingresa tu número móvil sin +34
              </p>
              {!isValidPhone && (
                <p className="mt-1 text-sm text-red-600">
                  Por favor, ingresa un número móvil español válido (6xx, 7xx, o
                  9xx)
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none transition-colors duration-200 ease-in-out resize-none"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY || ""}
                onChange={handleRecaptchaChange}
                hl="es" // Set language to Spanish
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full sm:h-auto sm:py-4 px-4 py-4 flex justify-center items-center bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 text-white text-lg font-semibold rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                disabled={!recaptchaToken}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Generar código QR
                </span>
              </button>
            </div>
          </form>
        ) : (
          <div ref={qrCodeContainerRef} className="p-6 sm:p-8 text-center">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              ¡Muy bien! Escanea este código QR con la cámara de tu teléfono.
            </p>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-2">
              <strong>En ordenador:</strong> Pulse "Abrir WhatsApp" para usar la
              versión web o escanee el código QR con su teléfono.
            </p>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-2">
              <strong>En móvil:</strong> Pulse "Abrir WhatsApp" para enviar su
              mensaje.
            </p>
            <div className="flex flex-col items-center mb-8">
              <QRCode
                value={whatsappLink}
                size={200}
                className="rounded-lg shadow-xl mb-6"
              />
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 animate-pulse">
                ¡Listo para escanear!
              </span>
            </div>
            <p className="text-base text-gray-700 mb-1">
              <span className="font-semibold">Para:</span> +{yourWhatsappNumber}
            </p>
            <p className="text-base text-gray-600 mb-8">
              <span className="font-semibold">Mensaje:</span> {message}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              >
                Editar mensaje
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border-2 border-green-600 rounded-lg shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
