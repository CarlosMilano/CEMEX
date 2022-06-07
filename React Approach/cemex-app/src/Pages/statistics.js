import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import DynamicChart from '../components/Chart.js';


//// GRAPH JS ////
class StatisticsView extends Component {
    
    componentDidMount() {
        document.title = 'Estadísticas'
    }
    render() {
        
        return(
        

        <div className = "app--is-not-login">
            <NavBar />
            <section className = "sectionGlass container">
                <DynamicChart className="col-12" id={"example"} />
            </section>
        </div>
        
        )
    }
}

export default StatisticsView;