import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
const About: NextPage = () => {
  return (
    <>
      <Page
        title="Apoorva Verma"
        description="MySQL and Heatwave Release Engineer @Oracle">
        <Prose>

          <div className="about-container">
            <div className="about-intro">
              <span>
                <p>
                  Hey there! I’m excited to share my DevOps journey with you 🚀 <br /><br />
                  I’ve been diving into the world of DevOps, learning the ins and outs of making development and operations work better together. <br />

                  <b>Along the way, I’ve picked up some cool tips, tricks, and a few lessons learned the hard way—So why not share them? 😉</b>
                </p>
              </span>
              <Image
                src={siteConfig?.authorImage}
                alt={siteConfig?.authorName}
                width={300}
                height={300}
                  className="about-image"
              />
            </div>
            <p>
              As a professional immersed in DevOps, I’ve had the opportunity to work with cutting-edge technologies like Oracle Cloud Infrastructure (OCI), Jenkins, Docker, and more. <br /><br />
              My blog is a reflection of the knowledge I’ve gained through hands-on projects, certifications, and real-world challenges.
            </p>

            <p>
              I’ve been playing around with tools like Jenkins, Docker, and Oracle Cloud Infrastructure (OCI), and I’m constantly exploring new ways to make things run smoother and faster. <br /><br />
              This blog is my space to jot down everything I’m learning, from the basics to the more advanced stuff, in the hopes that it might help someone else out there.

            </p>
            <p>

              Whether you’re just getting started with DevOps or you’ve been at it for a while, I’m glad you’re here. <br />
              Let’s learn, experiment, and maybe even mess up a little—because that’s how we grow, right?
            </p>




          </div>

        </Prose>
      </Page>
    </>
  );
};

export default About;
