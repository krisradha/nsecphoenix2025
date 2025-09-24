import React from "react";
import { useLocation } from "react-router-dom";
import { GalleryGrid } from "../../components/GalleryGrid";

//icons
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Wing = () => {
  const location = useLocation();

  const { name, aboutExtended, coverImage, members, gallery } = location.state;

  return (
    <div>
      <div className="intro-secondary flex gap-12 justify-start z-1 flex-col md:flex-row px-5 ">
        <div className="w-full md:w-40 text-white">
          <p className="text-[2rem] md:text-[3rem] font-[800]">
            {name[0].toUpperCase() + name.slice(1)}
          </p>
        </div>
      </div>

      {/* cover image */}
      <div className="mt-4 md:px-60">
        <div className="w-full h-56 relative group overflow-hidden flex rounded-lg">
          {" "}
          <img
            src={coverImage}
            alt="img"
            className="absolute w-full h-full inset-0 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
        </div>
      </div>

      <div className="wing-body px-10 md:px-60">
        {/* about */}
        <div className="about py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">About</h2>
          <p>{aboutExtended}</p>
        </div>

        {/* wing members */}
        <div className="wing-members py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Wing Members
          </h2>

          {/* ---for hierarchy --- */}
          {/* <div className='wing-lead flex justify-center'>
                        <MemberCard
                            name={members[0].name}
                            designation={members[0].designation}
                            socials={members[0].socials}
                        />
                    </div> */}
          {/* --- hierarchy --- */}

          <div className="flex gap-6 flex-wrap justify-center">
            {members.slice(0).map((item, index) => {
              return (
                <>
                  <MemberCard
                    key={index}
                    name={item.name}
                    profileImgUrl={item.profileImgUrl}
                    designation={item.designation}
                    socials={item.socials}
                  />
                </>
              );
            })}
          </div>
        </div>

        {/* gallery */}
        <div className="gallery py-8">
          <h2 className="text-3xl font-extrabold mb-4">Gallery</h2>
          <GalleryGrid data={gallery} />
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ name, designation, profileImgUrl, socials }) => {
  console.log(profileImgUrl);
  return (
    <>
      <style>
        {`
            .our-team {
            padding: 30px 0 60px;
            margin-bottom: 20px;
            background-color: #f7f5ec;
            text-align: center;
            overflow: hidden;
            position: relative;
            }

            .our-team .picture {
            display: inline-block;
            height: 150px;
            width: 150px;
            margin-bottom: 30px;
            z-index: 1;
            position: relative;
            }

            .our-team .picture::before {
            content: "";
            width: 100%;
            height: 0;
            border-radius: 50%;
            background-color: #1369ce;
            position: absolute;
            bottom: 135%;
            right: 0;
            left: 0;
            opacity: 0.9;
            transform: scale(3);
            transition: all 0.3s linear 0s;
            }

            .our-team:hover .picture::before {
            height: 100%;
            }

            .our-team .picture::after {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #1369ce;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            }

            .our-team .picture img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transform: scale(1);
            transition: all 0.9s ease 0s;
            }

            .our-team:hover .picture img {
            box-shadow: 0 0 0 14px #f7f5ec;
            transform: scale(0.7);
            }

            .our-team .social {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 100%;
            background-color: #1369ce;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 0.5s ease 0s;
            }

            .our-team:hover .social {
            bottom: 0;
            }

            .our-team .social li a {
            display: block;
            padding: 10px;
            font-size: 17px;
            color: white;
            transition: all 0.3s ease 0s;
            text-decoration: none;
            }

            .our-team .social li a:hover {
            color: #1369ce;
            background-color: #f7f5ec;
            }
        `}
      </style>

      <div className="our-team rounded-lg w-[15rem] flex-shrink-0 border-t-2 border-l-2 border-t-sky-300 border-l-sky-300 shadow-lg shadow-blue-300">
        <div className="picture">
          <img
            className="img-fluid"
            alt="img"
            src={profileImgUrl}
          />
        </div>
        <div className="team-content flex flex-col gap-1">
          <h3 className="name text-2xl font-bold">{name}</h3>
          <h4 className="title text-[#4e5052]">{designation}</h4>
        </div>
        <ul className="social">
          {socials?.insta && <li>
            <a href={socials.insta} aria-hidden="true">
              <AiFillInstagram size={"1.2rem"} />
            </a>
          </li>}
          {socials?.facebook && <li>
            <a href={socials.facebook} aria-hidden="true">
              <FaFacebook size={"1.2rem"} />
            </a>
          </li>}
          {socials?.github && <li>
            <a href={socials.github} aria-hidden="true">
              <FaGithub size={"1.2rem"} />
            </a>
          </li>}
          {socials?.linkedin && <li>
            <a href={socials.linkedin} aria-hidden="true">
              <FaLinkedinIn size={"1.2rem"} />
            </a>
          </li>}
        </ul>
      </div>
    </>
  );
};

export default Wing;
