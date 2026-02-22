  "use client";

  import Cta from "../components/Cta/Cta";
  import Experience from "../components/Experience/Experience";
  import Footer from "../components/Footer/Footer";
  import Header from "../components/Header/Header";
  import Hero from "../components/Hero/Hero";
  import Projects from "../components/Projects/Projects";
  import Stack from "../components/Stack/Stack";
  import Script from 'next/script';

  export default function Home() {
    
    return (
      <>
        <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Eric Augusto",
          url: "https://ericaugusto.pages.dev",
          sameAs: [
            "https://github.com/ericaugusto-git",
            "https://www.linkedin.com/in/eric-augusto-775245a9/"
          ],
          jobTitle: "Frontend Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance"
          },
          description: "Frontend developer specializing in modern web technologies like Angular, React and Next.js. Welcome to my portfolio.",
          image: "https://ericaugusto.pages.dev/images/profile_pic.png" 
        }),
      }}
    />

        <div
          className="min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px] xs:px-2 overflow-x-hidden"
          id="home"
        >
          <div    style={{
              height: "100%",
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
            }}><div style={{width: "100%", height: "100%", backgroundSize: "128px", backgroundRepeat: "repeat", backgroundImage: "url('images/noise.png')", opacity: "0.06", borderRadius: "0px"}}></div></div>
          <Header />
          <main className="my-32 lg:my-10">
            <Hero/>
            <Projects />
            <Stack />
            <Experience />
            <Cta />
          </main>
          <Footer />
        </div>
      </>
    );
  }
