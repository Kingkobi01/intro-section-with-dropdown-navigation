const Hero = () => {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-between items-center md:items-end gap-16 w-full">
      <div>
        <picture className="w-full">
          <source
            media="(orientation:portrait)"
            srcSet="./images/image-hero-mobile.png"
          />
          <source
            media="(orientation:landscape)"
            srcSet="./images/image-hero-desktop.png"
          />
          <img src="./images/image-hero-mobile.png" alt="Hero illustration" />
        </picture>
      </div>
      <div className="space-y-6 md:space-y-10 md:w-full text-center md:text-start">
        <h1 className="font-black text-4xl md:text-6xl lg:text-7xl">
          Make <br className="md:block hidden" /> remote work
        </h1>
        <p className="mx-auto md:mx-0 w-[40ch] md:w-[44ch] text-neutral-200">
          Get your team in sync, no matter your location. Streamline
          processes,create team rituals, and watch productivity soar.
        </p>
        <button className="inline-block border-2 border-neutral-300 bg-neutral-300 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold text-neutral-100 hover:text-neutral-300 duration-150">
          Learn more
        </button>
        <div className="flex justify-between items-center gap-6 pt-8">
          {["audiophile", "databiz", "maker", "meet"].map((url, idx) => (
            <img key={idx} src={`./images/client-${url}.svg`} alt={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
//

//
//

//
