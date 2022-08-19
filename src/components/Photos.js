import React from "react";
import { useState } from 'react';
import './photos.scss';
import Modal from 'react-modal'
import {api} from '../API/api'


export const Photos = props => {

  const [isActive, setActive]=useState(false);
  const [comment, setComment]=useState({});
  const [value,setValue]=useState("")
  const change = e => {
    setValue(e.target.value)
  }
    const openComment=()=>{
      setActive(true)
      console.log(props)
     api.getImg(props.id).then(setComment)
      console.log(comment)
    }
    const addComment=()=>{
      api.addComment(props.id,value)
      setActive(false)
      setValue("")
    }

  return <div className="photo-list">
    {
      <img src={props.url}
           alt="soul photo"
        onClick={openComment}
        />
    }
<Modal
isOpen={isActive} ariaHideApp={false} >
  <div className="main">
    <div className="C_close">
      <button onClick={()=>setActive(false) } className="close-button"></button>
        </div>


      {
        comment.url ?
          <>
            <img src={comment.url} alt="soul photo"/>

            <div className='comment' >{comment.comments.map(elem=><div  key={elem.id}>{elem.text}</div>)}</div>
              <p>Comment</p>
            <div className="C_input">
              <textarea value={value} onChange={change}/>

            </div>
              <p className="text">Write a few sentences about the photo.</p>
            <button onClick={addComment} className="save_button">Save</button>

          </>

          :"Loading..."

      }
  </div>
</Modal>

  </div>
}