import React from "react";
import useStore from "../../services/store";
import RuneCube from "./components/cube";
import MazeBlock from "./components/maze";
import TotalGameCount from "./components/totalGameCount";
import UserAnswer from "./components/userAnswer";
import LoadingSpinner from "../../components/LoadingSpinner";
import './index.scss';

const SolverPage = () => {
    const startGame = useStore(({startGame})=>startGame);

    return (
        <div className="solver-page">
            {startGame ?
                <div>
                    <UserAnswer/>            
                    <RuneCube/>
                    <MazeBlock/>   
                    <TotalGameCount/>   
                </div>
            :
                <LoadingSpinner/>                        
            }     
        </div>
    )
}

export default SolverPage;