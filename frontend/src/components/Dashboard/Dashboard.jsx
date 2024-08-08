import React from "react";
import styles from "./Dashboard.module.scss";
import UserTitle from "../UserTitle/UserTitle";
import DateDisplay from "../DateDisplay/DateDisplay";

const Dashboard = ({ username }) => {

  return (

    <div className={styles.container}>
      <UserTitle userName={username} />
      <DateDisplay />
    </div>
  );
};

export default Dashboard;
