import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.03] transition-all duration-300 ring-blue-500 border border-[#2A0E61] group"
    >
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-60 object-cover rounded-lg object-left-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h1>
      </div>
    </Link>
  );
};