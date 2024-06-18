import InfoBox from "@/components/InfoBox";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <h1>
          Welcome to my website !
          <div className="subtitle">Recipes, projects & more</div>
        </h1>
      </div>
      <div className="home-page">
        <InfoBox title="Note">
          <p>
            This is the new and improved version 2 of my website ! <br/>I finally
            made the switch from plain old HTML/CSS/JS to using a framework :
            Next.js. This has allowed me to easily make this website a lot
            easier to manage: I can now add recipes and posts in simple MDX
            format, and they are made pretty and added everywhere automatically.
          </p>
          <p>
            Bear with me while I finish transferring my previous content here, there are new exciting things to come :)
          </p>
        </InfoBox>
      </div>
    </>
  );
}
