import React from 'react'

export const PostComponents = ({data ,value, handlePageChange, handleSubmit}) => {
  return (
    <>
    <input type='text'
    placeholder={'Enter ID'}
    value={value}
    onChange={handlePageChange}>
    </input>
    <button onClick={handleSubmit}> Submit </button>
       {data && <div>{data.title}</div>}  
    </>
  )
}
