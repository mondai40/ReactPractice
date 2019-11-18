import React, {Component} from "react";
import {render} from "react-dom";

let skiData = {
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100,
};

class SkiDay extends Component {
    getPercent = (decimal) => {
        return  decimal * 100 + "%";
    }
    clacGoalProgress = (total, goal) => {
        return this.getPercent(total/goal);
    }
    render() {
        const {total, powder, backCountry, goal} = this.props;
        return(
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Powder Days: {powder}</p>
                </div>
                <div>
                    <p>Backcountry Days: {backCountry}</p>
                </div>
                <div>
                    <p>Goal Progress : {this.clacGoalProgress(total, goal)}</p>
                </div>
            </section>
        );
    }
}

render(
    <SkiDay 
        total={skiData.total}
        powder={skiData.powder}
        backCountry={skiData.backCountry}
        goal={skiData.goal}
    />,
    document.getElementById("root")
);