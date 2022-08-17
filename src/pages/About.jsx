import React from "react";
import img1 from "../assets/about.png";

const About = () => {
  return (
    <div class="container-fluid">
      <main class="tm-main">
        <div className="row tm-row tm-mb-45">
          <div className="col-12">
            <hr className="tm-hr-primary tm-mb-55" />
            <img src={img1} alt="my-blog" className="img-fluid" />
          </div>
        </div>
        <div className="row tm-row tm-mb-40">
          <div className="col-12">
            <div className="mb-4">
              <h2 className="pt-2 tm-mb-40 tm-color-primary tm-post-title">
                About my blog
              </h2>
              <p>
                This Blog about my(Recep) IT journey
                <br />
                As long as you understand your goals, your availability, and
                your learning style, structured and unstructured learning can be
                equally powerful. While structured bootcamps may save you time
                and energy by providing you with a set curriculum and industry
                knowledge, there is less freedom in deciding what and how you
                want to learn. On the other hand, self-learning would give you
                more flexibility, but could lack the structure and boundaries
                that might be helpful.
              </p>
              <p>
                Learning to code can be overwhelming. How you keep up the
                momentum, stay curious and motivated, and continue to advance
                your knowledge is a skill in itself. With a set curriculum,
                full-time onsite coding bootcamps create a learning environment
                where everyone learns the same information and works on projects
                at the same time. You feel a strong sense of belonging to this
                community of peers as everyone works toward the same goal: to
                become a software developer. While your cohort and your team can
                keep you accountable and motivated.
              </p>
            </div>
          </div>
        </div>
        <div className="row tm-row tm-mb-120">
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fas fa-bezier-curve fa-4x tm-color-primary" />
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">
                IT Fundamentals
              </h2>
              <p className="mb-0 tm-line-height-short">
                • Information Technology (IT) is an essential tool that we
                cannot avoid as it plays an important role in our day to day
                life, especially in the present scenario. The course “IT
                Fundamentals” is based on Computer Applications. The course
                starts with the basic Computer Fundamentals , Computational
                Thinking, then goes through Software Development Life Cycle,
                Agile , Jira, Linux and extends up to HTML, CSS, GIT,
                Programming with Python and SQL.
              </p>
            </div>
          </div>
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fas fa-users-cog fa-4x tm-color-primary" />
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">Front-End</h2>
              <p className="mb-0 tm-line-height-short">
                Frontend majorly involves programming or coding the parts of the
                website and applications that are visible to the user. The work
                of a Front End Developer is to build on the User Interface and
                User Experience designs which are the key elements of bringing
                design to life. Key skills of a Front End Developer include
                knowing HTML, CSS, JavaScript, and frameworks such as React JS,
                node js, etc. Along with this, knowledge about the version
                control system like GIT and GITHUB adds to their treasury.
              </p>
            </div>
          </div>
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fab fa-creative-commons-sampling fa-4x tm-color-primary" />
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">Back-End</h2>
              <p className="mb-0 tm-line-height-short">
                Backend or Backend development is like behind the scenes of a
                movie or show or in our case, the frontend. Actions taken by the
                user are analyzed, fetched, and delivered back by the backend
                through the codes written. The major work of a Back End
                Developer includes linking every aspect of the front end
                together and with the databases.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
