# 鱼骨图（for react）

## 概要

* fishbone chart for react
* 制作npm包并发布

## 基本用法

```
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Button, FishboneChart } from 'react-fishbone-chart'
const data = {
    "name": "Quality",
    "children": [
      {
        "name": "Machine",
        "children": [
          {"name": "Mill"},
          {"name": "Mixer"},
          {"name": "Metal Lathe"}
        ]
      },
      {"name": "Method"},
      {
        "name": "Material",
        "children": [
          {"name": "Masonite"},
          {
            "name": "Marscapone",
            "children": [
              {"name": "Malty"},
              {
                "name": "Minty",
                "children": [
                  {"name": "spearMint"},
                  {"name": "pepperMint"}
                ]
              }
            ]
          },
          {"name": "Meat",
            "children": [
              {"name": "Mutton"}
            ]
          }
        ]
      },
      {
        "name": "Man Power",
        "children": [
          {"name": "Manager"},
          {"name": "Master's Student"},
          {"name": "Magician"},
          {"name": "Miner"},
          {"name": "Magister", "children": [
              {"name": "Malpractice"}
          ]}
        ]
      },
      {
        "name": "Measurement",
        "children": [
          {"name": "Malleability"}
        ]
      },
      {
        "name": "Milieu",
        "children": [
          {"name": "Marine"}
        ]
      }
    ]
}

const App = ({ name }) => {
  return (
    <div style={{width:"600px", height:"600px"}}>
      <FishboneChart data={data} />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
```

### 参考

* [Building a React Component Library | Part 1](https://medium.com/@_alanbsmith/building-a-react-component-library-part-1-d8a1e248fe6c)
* [d3 fishbone](http://bl.ocks.org/bollwyvl/9239214)