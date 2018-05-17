# 鱼骨图（fishbone chart for react）

## install

```
npm i react-fishbone-chart
```

## how to use

```
import React from 'react';
import {FishboneChart} from 'react-fishbone-chart'

const initData = {
  data: ['a','b','c','d','e','f','g','h','k'], 
  speed: 28,                                    
}

const App = () => {
  return (
    <div style={{width:"600px", height:"600px"}}>
      <FishboneChart option={initData}/>
    </div>
  );
};

export default App;
```

### reference

* [Building a React Component Library | Part 1](https://medium.com/@_alanbsmith/building-a-react-component-library-part-1-d8a1e248fe6c)
* [d3 fishbone](http://bl.ocks.org/bollwyvl/9239214)