import React from "react";
import { useMatch, useParams, useNavigate } from "react-router-dom";

import useUserActivity from "../components/GetUserActivity";
import useUser from "../components/GetUser";


import Profil from "../components/Profil";
import Activity from "../components/Activity";
import "../css/global.css";

function DashBoard() {
  const navigate = useNavigate();
  const { id, name } = useParams(); // Récupère l'ID depuis l'URL
  const match = useMatch("/profil/:id/:name"); // Correspondance avec le modèle d'URL
  const idFromMatch = match && match.params.id; // Récupère l'ID depuis la correspondance
  const nameFromMatch = match && match.params.name;
  const { data: dataUser } = useUser(idFromMatch || id); // Utilise l'ID dans la requête
  const { data: dataActivity } = useUserActivity(idFromMatch || id);
  if(dataUser?.data?.userInfos?.firstName != match.params.name){
    navigate("/error/404"); // Redirige vers la page d'erreur 404
    return null;
  }
  

  return (
    <div className="dashboard">
      <Profil user={dataUser?.data?.userInfos} className="dashboard-profil" />
      <div className="dashboard-data-container">
        <Activity activity={dataActivity?.data?.sessions} />
      </div>
    </div>
  );
}

export default DashBoard;
