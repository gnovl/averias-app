"use client";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";
import ServiceListSimple from "./ServiceListSimple";

const PastProjects: React.FC = () => {
  const [index, setIndex] = useState(-1);

  const photos = [
    {
      src: "/pic_slide (1).jpg",
      width: 600, // Increase the width to 1200
      height: 900, // Increase the height to 900 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (2).jpg",
      width: 700, // Decrease the width to 800
      height: 1000, // Decrease the height to 600 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (3).jpg",
      width: 1500, // Increase the width to 1600
      height: 900, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (4).jpg",
      width: 600, // Increase the width to 1600
      height: 900, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (5).jpg",
      width: 500, // Increase the width to 1600
      height: 800, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (6).jpg",
      width: 1000, // Increase the width to 1600
      height: 600, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (7).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (8).jpg",
      width: 700, // Increase the width to 1600
      height: 1000, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (9).jpg",
      width: 800, // Increase the width to 1600
      height: 500, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (10).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (11).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (12).jpg",
      width: 900, // Increase the width to 1600
      height: 500, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (13).jpg",
      width: 800, // Increase the width to 1600
      height: 500, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (14).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (15).jpg",
      width: 700, // Increase the width to 1600
      height: 500, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (16).jpg",
      width: 700, // Increase the width to 1600
      height: 400, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (17).jpg",
      width: 800, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (18).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (19).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (20).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (21).jpg",
      width: 600, // Increase the width to 1600
      height: 500, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (22).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (23).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (24).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (25).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (26).jpg",
      width: 700, // Increase the width to 1600
      height: 1200, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (27).jpg",
      width: 700, // Increase the width to 1600
      height: 400, // Increase the height to 1200 to maintain the aspect ratio
    },
    {
      src: "/pic_slide (28).jpg",
      width: 700, // Increase the width to 1600
      height: 400, // Increase the height to 1200 to maintain the aspect ratio
    },
    // Add more photos as needed
  ];

  const responsiveColumns = (containerWidth: number) => {
    if (containerWidth >= 1200) return 5;
    if (containerWidth >= 600) return 4;
    if (containerWidth >= 300) return 3;
    return 2;
  };

  const responsiveSpacing = (containerWidth: number) => {
    if (containerWidth >= 1200) return 20;
    if (containerWidth >= 600) return 15;
    if (containerWidth >= 300) return 10;
    return 5;
  };

  const responsivePadding = (containerWidth: any) => 0;

  const responsiveSizes = {
    size: "100vw",
    sizes: [
      { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
      { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
    ],
  };

  const responsiveTargetRowHeight = (containerWidth: number) => {
    if (containerWidth >= 1200) return 250; // Larger row height for larger screens
    if (containerWidth >= 600) return 200; // Medium row height for medium screens
    return 150; // Smaller row height for smaller screens
  };

  return (
    <section className="py-20 px-4 lg:px-20 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 bg-gray-100 p-4 mb-8 rounded-t-lg border-b-2 border-gray-400">
          Proyectos previos
        </h1>
        <p className="text-base text-black font-normal leading-relaxed">
          Conoce nuestros trabajos completados, y descubre la calidad y
          dedicación que ponemos en cada proyecto. Observa el detalle y
          profesionalismo en cada una de nuestras obras.
        </p>
        <ServiceListSimple />
        <div className="mb-8">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            columns={responsiveColumns}
            spacing={responsiveSpacing}
            padding={responsivePadding}
            targetRowHeight={responsiveTargetRowHeight}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={NextJsImage}
            defaultContainerWidth={1200}
            sizes={responsiveSizes}
          />
        </div>
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </section>
  );
};

export default PastProjects;
