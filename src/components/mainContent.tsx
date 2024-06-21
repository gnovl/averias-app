"use client";

import image1 from "/public/img_1.jpg";
import image2 from "/public/img_2.jpg";
import image3 from "/public/img_3.jpg";
import image4 from "/public/img_4.jpg";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StaticImageData } from "next/image";
import ServiceList from "./ServiceList";

const usePreloadImages = (images: StaticImageData[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const preloadImages = async () => {
      const promises = images.map((img) => {
        return new Promise((resolve, reject) => {
          const imgObj = new Image();
          imgObj.src = img.src;
          imgObj.onload = resolve;
          imgObj.onerror = reject;
        });
      });

      await Promise.all(promises);
      if (isMounted) setImagesLoaded(true);
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [images]);

  return imagesLoaded;
};

const EmblaCarouselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((loaded) => loaded + 1);
  }, []);

  useEffect(() => {
    if (imagesLoaded === 4 && emblaApi) {
      emblaApi.reInit();
    }
  }, [imagesLoaded, emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <img
            className="embla__slide"
            src={image1.src}
            alt="Slide 1"
            onLoad={handleImageLoad}
          />
          <img
            className="embla__slide"
            src={image2.src}
            alt="Slide 2"
            onLoad={handleImageLoad}
          />
          <img
            className="embla__slide"
            src={image3.src}
            alt="Slide 3"
            onLoad={handleImageLoad}
          />
          <img
            className="embla__slide"
            src={image4.src}
            alt="Slide 4"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        &#9664;
      </button>
      <button className="embla__next" onClick={scrollNext}>
        &#9654;
      </button>

      {/* Embla Carousel styles */}
      <style jsx>{`
        .embla {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 300px;
        }
        .embla__viewport {
          overflow: hidden;
          width: 100%;
          height: auto;
        }
        .embla__container {
          display: flex;
          height: 100%;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
        .embla__slide img {
          width: 100%;
          height: 400px; /* Set the desired initial height */
          object-fit: cover;
        }
        .embla__prev,
        .embla__next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 8px 16px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          cursor: pointer;
          z-index: 1;
          font-size: 18px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .embla__prev {
          left: 10px;
        }
        .embla__next {
          right: 10px;
        }

        /* Responsive styles */
        @media (max-width: 767px) {
          .embla__slide {
            position: static; /* Reset position for smaller screens */
          }
          .embla__prev,
          .embla__next {
            position: absolute; /* Revert to absolute positioning */
            top: 50%;
            transform: translateY(-50%);
            margin: 0 10px; /* Add horizontal margin */
          }
            .embla {
          height: 200px;
        }
        }
         @media (min-width: 510px) and (max-width: 767px) {
            .embla {
          height: 280px;
        }
        }
       @media (min-width: 768px) and (max-width: 1023px) {
        /* Adjust button positioning for this resolution range */
        .embla__prev,
        .embla__next {
         position: absolute; /* Revert to absolute positioning */
         top: 25%;
         margin: 0 20px; /* Increase the horizontal margin */
          }
        }

        @media (min-width: 768px) {
        .embla__slide {
         flex: 0 0 50%;
        }
      }

        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 50%;
          }
      `}</style>
    </div>
  );
};

const MainContent: React.FC = () => {
  const images = [image1, image2, image3, image4];
  const imagesLoaded = usePreloadImages(images);

  return (
    <section className="py-4 px-4 lg:px-20 bg-white">
      <div className="container mx-auto text-center">
        <SkeletonTheme baseColor="#C0C0C0" highlightColor="#FFFFFF">
          {!imagesLoaded ? (
            <Skeleton
              height={200}
              count={1}
              borderRadius={8}
              duration={2}
              style={{ marginBottom: "1rem" }}
            />
          ) : (
            <EmblaCarouselComponent />
          )}
        </SkeletonTheme>
        <p className="text-2xl text-black font-bold leading-relaxed mt-4 md:mt-4">
          Nuestros servicios ✨
        </p>
        <ServiceList />
      </div>
    </section>
  );
};

export default MainContent;
