import React, {
  Component
} from 'react';
import d3 from './d3.js';
// import './style.css';
import createFishbone from './d3.fishbone.js';
import PropTypes from 'prop-types';

class FishboneChart extends Component {
  render() {
    return ( 
      <div id = "fishbone_content"style = {{width: "100%",height: "100%"}} > </div>
    );
  }
  componentDidMount() {
    this._renderFishbone(this.props.data)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data === this.props.data) {
      return
    }
    this._renderFishbone(this.props.data)
  }
  _renderFishbone = (data) => {
    // create the configurable selection modifier
    var node = document.getElementById('fishbone_content')
    var fishbone = createFishbone(d3,node);
    // the most reliable way to get the screen size
    console.log('width:',node.offsetWidth,'height:',node.offsetHeight)
    var size = (function () {
        return {
          width: node.offsetWidth,
          height: node.offsetHeight
        };
      }),
      svg = d3.select(node)
      .append("svg")
      // firefox needs a real size
      .attr(size())
      // set the data so the reusable chart can find it
      .datum(data)
      // set up the default arrowhead
      .call(fishbone.defaultArrow)
      // call the selection modifier
      .call(fishbone);

    // this is the actual `force`: just start it
    fishbone.force().start();

    // handle resizing the window
    d3.select(window).on("resize", function () {
      fishbone.force()
        .size([size().width, size().height])
        .start();
      svg.attr(size())
    });
  }
}
FishboneChart.propTypes = {
  data: PropTypes.object,
}


export default FishboneChart;