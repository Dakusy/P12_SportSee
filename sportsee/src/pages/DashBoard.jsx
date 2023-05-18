import React from "react";
import { useMatch, useParams, useNavigate } from "react-router-dom";
import useUser from "../components/GetUser";
import Profil from "../components/Profil";
import "../css/global.css";

function DashBoard() {
  const navigate = useNavigate();
  const { id, name } = useParams(); // Récupère l'ID depuis l'URL
  const match = useMatch("/profil/:id/:name"); // Correspondance avec le modèle d'URL
  const idFromMatch = match && match.params.id; // Récupère l'ID depuis la correspondance
  const nameFromMatch = match && match.params.name;
  const { data: dataUser } = useUser(idFromMatch || id); // Utilise l'ID dans la requête
  if(dataUser?.data?.userInfos?.firstName != match.params.name){
    navigate("/error/404"); // Redirige vers la page d'erreur 404
    return null;
  }
  

  return (
    <div className="dashboard">
      <Profil user={dataUser?.data?.userInfos} className="dashboard-profil" />
    </div>
  );
}

export default DashBoard;
