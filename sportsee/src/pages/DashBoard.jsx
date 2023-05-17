import React from "react";

import useUser from "../components/GetUser";
import Profil from "../components/Profil";


import "../css/global.css"

const ID_USER = "12";

function DashBoard() {

  const { data: dataUser } = useUser(ID_USER);

    return (
      <div className="dashboard">
      <Profil user={dataUser?.data?.userInfos} className="dashboard-profil" />
      </div>

    );
  };
  
  export default DashBoard;