import Course from "../student/Course";

const HeroSection3 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
      <div className="">
        <h1 className="text-5xl text-center font-extrabold underline">Our Courses</h1>
        <Course />
      </div>
    </div>
  );
};
export default HeroSection3;
