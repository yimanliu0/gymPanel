import React, { useState } from "react";
import Schedule from "./Schedule";
import Profile from "./Profile";
import Courses from "./Courses";
import Trainers from "./Trainers";
import "./style/Dashboard.css";

const Dashboard = ({ user, userSetter }) => {
  const [currentModule, setCurrentModule] = useState(<Schedule user={user} />);
  const [currentState, setCurrentState] = useState([true, false, false, false]);
  const currentPage = "#";

  const setCurrentPage = (index, module) => {
    setCurrentModule(module);
    const states = [false, false, false, false];
    states[index] = true;
    setCurrentState(states);
  };

  return (
    <div className={"main-container"}>
      <aside className={"side-nav"}>
        <h2>
          Welcome
          <br /> {user.username}
        </h2>
        <ul className="list">
          <li
            key="schedule"
            style={{ listStyleType: "None" }}
            className={currentState[0] ? "active" : ""}
          >
            <a
              href={currentPage}
              className="App-link"
              onClick={() => setCurrentPage(0, <Schedule user={user} />)}
            >
              <i className={"fa fa-calendar"} /> Schedule
            </a>
          </li>
          <li
            key="profile"
            style={{ listStyleType: "None" }}
            className={currentState[1] ? "active" : ""}
          >
            <a
              href={currentPage}
              className="App-link"
              onClick={() => setCurrentPage(1, <Profile user={user} />)}
            >
              <i className={"fa fa-user"} /> Profile
            </a>
          </li>
          <li
            key="courses"
            style={{ listStyleType: "None" }}
            className={currentState[2] ? "active" : ""}
          >
            <a
              href={currentPage}
              className="App-link"
              onClick={() => setCurrentPage(2, <Courses user={user} />)}
            >
              <i className={"fa fa-th-list"} /> Courses
            </a>
          </li>
          <li
            key="trainers"
            style={{ listStyleType: "None" }}
            className={currentState[3] ? "active" : ""}
          >
            <a
              href={currentPage}
              className="App-link"
              onClick={() => setCurrentPage(3, <Trainers user={user} />)}
            >
              <i className={"fa fa-database"} /> Trainers
            </a>
          </li>
          <li key="log-out" style={{ listStyleType: "None" }}>
            <a href={"/logout"} className="App-link">
              {" "}
              <i className={"fa fa-sign-out"} /> Log out
            </a>
          </li>
        </ul>
      </aside>
      <div style={{ paddingTop: "100px" }}>{currentModule}</div>
    </div>
  );
};

export default Dashboard;
