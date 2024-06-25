import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  const [imageDimensions, setImageDimensions] = useState<
    Record<string, { width: number; height: number }>
  >({});

  useEffect(() => {
    const loadImageDimensions = async () => {
      const images = content.match(/!\[.*?\]\((.*?)\)/g) || [];
      const dimensions: Record<string, { width: number; height: number }> = {};

      for (const image of images) {
        const src = image.match(/\((.*?)\)/)?.[1];
        if (src) {
          try {
            const img = new window.Image();
            img.src = src.replace(/^\/+/, "/"); // Remove extra leading slashes
            await new Promise((resolve) => {
              img.onload = resolve;
            });
            dimensions[src] = {
              width: img.naturalWidth,
              height: img.naturalHeight,
            };
          } catch (error) {
            console.error(`Failed to load image dimensions for ${src}:`, error);
          }
        }
      }

      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, [content]);

  const formatSrc = (src: string): string => {
    // Remove all leading slashes and add a single slash at the beginning
    return "/" + src.replace(/^\/+/, "").replace(/^blog_img\//, "");
  };

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        components={{
          img: (props) => {
            const src = formatSrc(props.src || "");
            const dimensions = imageDimensions[props.src || ""];
            if (dimensions) {
              return (
                <Image
                  src={src}
                  alt={props.alt || ""}
                  width={dimensions.width}
                  height={dimensions.height}
                />
              );
            }
            return <img {...props} src={src} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
