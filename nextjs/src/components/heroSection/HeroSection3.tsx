import Course from "../student/Course";

const HeroSection3 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 mx-2 md:space-x-18">
      <div className="w-full">
        <div className="text-center space-y-6">
          <h1 className="text-3xl text-center font-extrabold underline">
            Trading  Courses Designed For Results
          </h1>
          <h1 >
            From beginner fundamentals to advanced strategies, our curriculum
            helps you master the markets step by step.
          </h1>
        </div>
        <Course />
      </div>
    </div>
  );
};
export default HeroSection3;
