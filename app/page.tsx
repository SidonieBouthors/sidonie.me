import InfoBox from "@/components/InfoBox";
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <ExportedImage
          className="home-hero-image"
          src="/home-hero.jpg"
          alt="Hero image"
          fill={true}
        />
        <h1>Welcome to my website!</h1>
        <div className="subtitle">Recipes, projects & more</div>
      </div>
      <div className="home-page">
        <InfoBox title="Note">
          <p>
            This is the new and improved version 2 of my website ! <br />I
            finally made the switch from plain old HTML/CSS/JS to using Next.js.
            This has allowed me to easily make this website a lot easier to
            manage: I can now add recipes and posts in simple MDX format, and
            they are formatted and added everywhere automatically.
          </p>
          <p>
            I{"'"}m still adding some functionalities but I transferred most of
            the original content already, and more will come !
          </p>
        </InfoBox>
      </div>
    </>
  );
}
