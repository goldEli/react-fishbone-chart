import React from 'react';
import draw from './draw';

export default class FishBoneChart extends React.Component{
    componentDidMount() {
        this._renderChart()
    }
    render(){
        return(
            <div style={{width:"100%", height:"100%"}} id="fishBoneChartContent"></div>
        )
    }
    _renderChart = () => {
        const {option} = this.props;
        option.container = document.getElementById('fishBoneChartContent')
        draw(option)
    }
}