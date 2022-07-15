import React from 'react'
import { Tag } from "antd";

// tag
const log = (e) => {
    console.log(e);
  };
  
 

const tag = () => {
  return (
    <>
                    <br />
                    <div className="text-title">skills</div>
                    <div className="tag-field" >
                      <Tag closable onClose={log}>
                        photoshop
                      </Tag>
                      <Tag closable onClose={log}>
                        JavaScript
                      </Tag>
                      <Tag closable onClose={log}>
                        React
                      </Tag>
                     
                    </div>
                  </>
  )
}

export default tag