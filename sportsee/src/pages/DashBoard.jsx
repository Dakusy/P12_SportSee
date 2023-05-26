import React from "react";
import { useMatch, useParams, useNavigate } from "react-router-dom";

import useUserActivity from "../components/GetUserActivity";
import useUser from "../components/GetUser";
import useUserSession from "../components/GetUserSession";
import useUserPerformance from "../components/GetUserPerf";

import Profil from "../components/Profil";
import Activity from "../components/Activity";
import Score from "../components/Score";
import Session from "../components/Session";
import Info from "../components/Info";
import Performance from "../components/Perf";
import "../css/global.css";

function DashBoard() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const match = useMatch("/profil/:id/:name"); // Correspondance avec le modèle d'URL
  const idFromMatch = match?.params?.id; // Récupère l'ID depuis la correspondance
  const nameFromMatch = match?.params?.name;

  const { data: dataUser } = useUser(idFromMatch || id); // Utilise l'ID dans la requête
  const { data: dataActivity } = useUserActivity(idFromMatch || id);
  const { data: dataSession } = useUserSession(idFromMatch || id);
  const { data: dataPerformance } = useUserPerformance(idFromMatch || id);

  if (dataUser?.data?.userInfos?.firstName !== nameFromMatch) {
    navigate("/error/404"); // Redirige vers la page d'erreur 404
    return null;
  }

  return (
    <div className="dashboard">
      <Profil user={dataUser?.data?.userInfos} className="dashboard-profil" />
      <div className="dashboard-graph-container">
        <div className="dashboard-data-container">
          <Activity activity={dataActivity?.data?.sessions} />
          <div className="dashboard-data-graph">
            <Session sessions={dataSession?.data} />
            <Performance performance={dataPerformance?.data} />
            <Score score={dataUser?.data} />
          </div>
        </div>
        <div>
          <Info keyData={dataUser?.data?.keyData} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
