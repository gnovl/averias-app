import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props: any) => {
  return (
    <Image
      {...props}
      width={800}
      height={450}
      className="rounded-lg w-full h-auto"
    />
  );
};

const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
};

export default MDXComponents;
