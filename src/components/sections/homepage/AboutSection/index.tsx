const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="space-y-16 py-28 lg:py-20 [&_article]:space-y-1 [&_article_h3]:text-xl [&_article_p]:text-neutral-300/90"
    >
      <article>
        <h3 className="font-disket-mono">
          Who the heck are we <span className="text-purple-500">?</span>
        </h3>
        <p>
          Nauth is at the forefront of NFT authentication, ensuring the
          legitimacy and provenance of digital artworks. By leveraging advanced
          binary comparison technology, we protect artists from forgeries and
          provide collectors with peace of mind.
        </p>
      </article>

      <article>
        <h3 className="font-disket-mono">
          Our Vision <span className="text-purple-500">.</span>
        </h3>
        <p>
          To become the leading provider of NFT authentication services,
          ensuring trust in the digital art space through innovative technology
          and transparent verification.
        </p>
      </article>

      <article>
        <h3 className="font-disket-mono">
          Our Mission <span className="text-purple-500">.</span>
        </h3>
        <p>
          At Nauth, our mission is to safeguard the originality of digital
          artworks by ensuring every NFT is unique. We believe in transparency,
          trust, and innovation. Whether you&apos;re an artist or a collector,
          we&apos;re here to help protect the integrity of your assets.
        </p>
      </article>
    </section>
  );
};
export default AboutSection;
