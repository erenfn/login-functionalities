import HomePageTemplate from "../../components/templates/HomePageTemplate";
import "./Home.css";
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/loginServices';
import Dashboard from "../../components/Dashboard/Dashboard";

const Home = () => {
  const [username, setUsername] = useState(''); 

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setUsername(user.username); 
    };

    fetchUser(); 
  }, []);

  return (
    <div className="app">
      <div className="content">
        <HomePageTemplate>
          <Dashboard username={username}/>
        </HomePageTemplate>
      </div>
    </div>
  );
};

export default Home;
