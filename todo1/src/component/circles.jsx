import React from 'react';
import './circle.css';
 

export const CircleComponent = () => {
  return (
    <><div>
          <div className="circle" id="circle" data-text="This is the First circle." >
              <div className="scale" id="one">Arcana Function 1</div>
              <div className="scale" id="two">Arcana Function 2</div>
              <div className="scale" id="three">Arcana Function 3</div>
              <div className="scale" id="four">Arcana Function 4</div>

          </div>
           
          <div className="circle2" id="circle2" data-text="This is the Second circle.">
              <div className="scale2" id="five">Harmony</div>
              <div>
                  <div className="scale2" id="six">Peace</div>
              </div>
          </div>
      </div><div className="circle3" id="circle3" data-text="This is the Third circle.">Core persona</div><div className="popup" id="popup">

          </div></>
  )
};
 
