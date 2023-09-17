import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="p-10 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <i className="fa-solid text-4xl fa-laptop-code"></i>
          <h2 className="text-2xl font-bold">Developer Hire</h2>
        </div>
        <nav className="flex  gap-5 font-medium pt-3 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/appliedJob">Applied Job</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </nav>
        <div>
          <button className="btn btn-primary text-white border-none hover:bg-blue-500">
            Start Applying
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center justify-center container m-auto">
        <div>
          <h2>
            One Step <br />
            Closer To Your <br />
            Dream Job
          </h2>
          <p>
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage <br />{" "}
            all your job application from start to finish.
          </p>
        </div>
        <div>
          <img src="/public/images/Sumon-removebg-preview.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
