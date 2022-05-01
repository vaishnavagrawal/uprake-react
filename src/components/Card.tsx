import Editor from './Editor';
import React from 'react';
import IFrame from './IFrame';
import { tw } from 'twind';

function Card() {
  return (
    <div>
      Card
      <IFrame title={'hi'}>
        <>
          <div>
            <div>
              <button>TBR</button>
              <button>MPR</button>
              <button>POINTS</button>
              <button>sync</button>
              <button>SS</button>
            </div>
            <div>
              This is the editor
              <div style={{ backgroundColor: 'khaki' }}>
                <Editor></Editor>
              </div>
            </div>
          </div>
        </>
      </IFrame>
    </div>
  );
}

export default Card;
