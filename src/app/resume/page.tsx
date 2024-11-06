import React from 'react'

function page() {
  const technologies =
    [
      { name: 'HTML/CSS', percentage: 95 },
      { name: 'Tailwindcss', percentage: 90 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'ReactJS', percentage: 90 },
      { name: 'Next.js', percentage: 70 },
      { name: 'NodeJS', percentage: 50 },
      { name: 'ExpressJS', percentage: 50 },
      { name: 'MongoDB', percentage: 50 },
    ]
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h4 className="text-lg font-bold">Objective</h4>
          <hr className="border-t-3 border-purple-600 mb-4" />
          <p className="">
            To work in a challenging role that offers opportunities to enhance my technical skills and knowledge, while providing new insights that will contribute to my career growth.
          </p>

          <h4 className="text-lg font-bold mt-6">About Me</h4>
          <hr className="border-t-3 border-purple-600 mb-4" />
          <p className=" mb-3">
            I graduated in 2022 from GC University Faisalabad, Layyah Campus, with a degree in BS(CS). I am passionate about giving back to the community and aim to channel this passion through my career in software engineering.
          </p>

          <hr className="border-t-3 border-purple-600 mb-4" />

          <h5 className="font-semibold">Current Address</h5>
          <p>G-11 Markaz, Islamabad, Punjab, Pakistan</p>

          <h5 className="font-semibold mt-4">Home Address</h5>
          <p>Shaher Sultan P/O Same Tehsil Jatio, District Muzaffar Garh, Punjab, Pakistan</p>

          <h5 className="font-semibold mt-4">Phone</h5>
          <p>
            <a href="tel:+923081844802" className=" hover:underline">+923081844802</a><br />
            <a href="tel:+923096127551" className=" hover:underline">+923127391866</a>
          </p>

          <h5 className="font-semibold mt-4">Email</h5>
          <p>
            <a href="mailto:fidahussain9133@gmail.com" className=" hover:underline">fidahussain9133@gmail.com</a>
          </p>

          <p className="mt-4">
            <a href="/Fida(Reactjs developer).CV.pdf" download="Fida(Reactjs developer).CV.pdf" target="_blank" rel="noreferrer">
              <button className=" bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Download CV/Resume
              </button>
            </a>
          </p>

          <hr className="border-t-3 border-purple-600 mt-4" />
        </div>

        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div className="flex items-baseline">
              <div className="w-1/4 ">2018 - 2022</div>
              <div className="w-3/4">
                <h4 className="font-semibold">GC University Faisalabad, Layyah Campus, Pakistan</h4>
                <p className="">I completed my BS(CS) at GC University Faisalabad, Layyah Campus.</p>
              </div>
            </div>
          </div>

          <hr className="border-t-3 border-red-600 my-4" />

          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="flex items-baseline">
              <div className="w-1/4 ">2021 - 2022</div>
              <div className="w-3/4">
                <h4 className="font-semibold">Learning Phase</h4>
                <p className="">Worked on ReactJS applications from PanaCloud Bootcamp 2020.</p>
              </div>
            </div>
            <div className="flex items-baseline">
              <div className="w-1/4 ">Sep 2022 - June 2024</div>
              <div className="w-3/4">
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="">Formerly worked as a Frontend Developer at SocialB.digital, Lahore.</p>
              </div>
            </div>
            <div className="flex items-baseline">
              <div className="w-1/4 ">August 2024 - Present</div>
              <div className="w-3/4">
                <h4 className="font-semibold">Senior Frontend Developer</h4>
                <p className="">Currently working as a Senior Frontend Developer at IR Solutions.</p>
              </div>
            </div>
          </div>

          <hr className="border-t-3 border-red-600 my-4" />

          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            {technologies.map(skill => (
              <div className="flex items-center" key={skill.name}>
                <div className="w-1/3 ">{skill.name}</div>
                <div className="w-2/3 bg-white rounded-full h-2.5 relative">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
