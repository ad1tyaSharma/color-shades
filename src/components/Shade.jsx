import React, {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Shade = ({shade, onCopy}) => {
    const [copied,setCopied] = useState(false);
    useEffect(() => {
        let interval;
        if(copied)
        {interval = setInterval(()=>{
            setCopied(false);
        },1200)
    return () =>{
        clearInterval(interval)
    }
}
    },[copied])
    const Copy= ()=>
    {
        setCopied(true);
        onCopy();
    }
    return (
        <>
         <CopyToClipboard text = {shade.hexString()} onCopy = { ()=>Copy()}>
      <span className="text" style={{ backgroundColor: shade.hexString() }}>
          {
              copied ? (
                  <span className='copied'>Copied !</span>
              ) : <span> {shade.hexString()}</span>
          }
        
      </span>
      </CopyToClipboard>   
        </>
    )
} 
export default Shade;
