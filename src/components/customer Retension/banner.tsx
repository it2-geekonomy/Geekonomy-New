const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[clamp(80vh,100vh,120vh)] overflow-hidden">
      <img
        src="/expertise/Coming soon banner.webp"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Banner;
