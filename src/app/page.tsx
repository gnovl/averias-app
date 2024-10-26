"use client";
import NavigationBar from "@/components/navigation";
import PastProjects from "@/components/pastProjects";
import Contact from "@/components/contactUs";
import MainContent from "@/components/mainContent";
import Footer from "@/components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { ConsentBanner, ConsentProvider } from "react-hook-consent";
import "react-hook-consent/dist/styles/style.css";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <ConsentProvider
      options={{
        services: [
          {
            id: "google-recaptcha",
            name: "Google reCAPTCHA",
            cookies: [{ pattern: /^__Secure-.*/ }],
            mandatory: true,
          },
        ],
        theme: "light",
      }}
    >
      <div>
        <NavigationBar />
        <section id="home">
          <MainContent />
        </section>
        <section id="pastprojects">
          <PastProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
        <ScrollToTop
          smooth
          color="#6f00ff"
          className="fixed bottom-4 flex justify-center items-center text-white rounded-full p-2"
        />
        <ConsentBanner
          settings={{
            hidden: false,
            label: "Más información",
            modal: { title: "Servicios y cookies" },
          }}
          decline={{ hidden: false, label: "No" }}
          approve={{ label: "Aceptar" }}
        >
          <>
            Utilizamos algunos servicios y cookies según nuestra{" "}
            <Link href="/privacy">Política de privacidad</Link> para ofrecerle
            una experiencia de usuario óptima en nuestro sitio web.
          </>
        </ConsentBanner>
      </div>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AVERIAS HOGAR",
            description:
              "Fontanero en Madrid especializado en averías, reparaciones y mantenimiento del hogar. Servicios de fontanería, calefacción y pintura interior.",
            url: "https://averiashogar.es",
            telephone: "689680473",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Madrid",
              addressRegion: "Madrid",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.4168, // Replace with actual coordinates
              longitude: -3.7038, // Replace with actual coordinates
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />
    </ConsentProvider>
  );
}
