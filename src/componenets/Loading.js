import React from "react";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/ScaleLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: PURPLE;
`;


const Loading = props => {
    const loading = props.isLoading;
    return (
            <div className="overlay-box">
              <SyncLoader
                // css={override}
                size={150}
                color={"#123abc"}
                loading={loading}
                
              />
            </div>
          );
    
}



export default Loading;