import React from 'react';

const Projects = () => {
    return (
        <div id="Projects" className="m-3 justify-content-center align-items-center global-padding">
        <div className="text-center">
        <h2 className="">Projects</h2>
        <hr></hr>
        </div>
        <div className="row card-deck global-padding justify-content-center">
        <div className="col-md-6 col-12 mx-auto m-2">
            <div className="card">
                <div className="card-body ">
                    <h2 className="card-title"> Titanic Statistic Simulator</h2>
                    <p><a href="https://github.com/HollyPurvis/TitanicSimulator" className="external" target="_blank" rel="noreferrer">Github Link</a></p>
                    <p>Skills: Python, Pandas, and Matplotlib</p>
                    <p>This program uses a Titanic dataset to predict the likelihood of survival based on user input. You can either input personal characteristics (age, sex, and class) to estimate your chance of survival or choose to view a generated graph showing the survival distribution based on these attributes.
                    </p>
                </div>
            </div>
        </div>  
        <div className="col-md-6 col-12 mx-auto m-2">
            <div className="card">
                <div className="card-body ">
                    <h2 className="card-title"> 2000s Top 10 Charting Songs</h2>
                    <p><a href="https://github.com/HollyPurvis/2000-Billboard-Top-100" className="external" target="_blank" rel="noreferrer">Github Link</a></p>
                    <p>Skills: R, tidyverse packages (including tidyr, dplyr, glue, and stringr)</p>
                    <p>This R program extracts data from the billboards package and allows users to select an artist whose songs have appeared in the top 10 of the Billboard Hot 100. The program then generates a graph to visualize the ranking of the selected artist's songs, using packages from tidyverse (including tidyr, dplyr, glue, and stringr).
                    </p>
                </div>
            </div>
        </div>              
    </div>
           
        </div>
        
    )
}

export default Projects