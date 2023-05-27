import React, { useEffect, useState } from "react";
import "./index.css";

const ApplicationsDetails = () => {
  const [users, setUsers] = useState([]);
  const [usersApp, setUsersApp] = useState([]);

  const fetchUserData = () => {
    fetch("https://engineering-task.elancoapps.com/api/applications")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const fetchUserAppData = (usersApp) => {
    const data = [];
    fetch(
      `https://engineering-task.elancoapps.com/api/applications/${usersApp}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersApp(data);
        console.log("data", data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="d-flex">
        <ul className="main-app">
          <h1>Click on below Application Cost for fetching the information</h1>
          {users.map((users, index) => (
            <li key={index}>
              <button onClick={() => fetchUserAppData(users)}>{users}</button>
            </li>
          ))}
        </ul>

        <ul className="main-child">
          <h1>Information</h1>
          {usersApp.map((data, index) => (
            <li key={index}>
              <h1>Resource Group : {data.ResourceGroup}</h1>
              <h6>Consumer Quntity : {data.ConsumedQuantity}</h6>
              <h6>Cost: {data.Cost}</h6>
              <h6>Date: {data.Date}</h6>
              <h6>Instance Id : {data.InstanceId}</h6>
              <h6>Meter Category: {data.MeterCategory}</h6>
              <h6>Resource Location: {data.ResourceLocation}</h6>
              <h6>Service Name: {data.ServiceName}</h6>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApplicationsDetails;
