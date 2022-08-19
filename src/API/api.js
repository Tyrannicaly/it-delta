import axios from 'axios'

const url = 'https://boiling-refuge-66454.herokuapp.com/images/'
export const api = {
  getImg : (id) => fetch(url+id).then(data=>data.json()),
  getAllImgs :() => fetch(url).then(data=>data.json()),
  addComment:(id,text)=> axios.post(url+id+"/comments", {comment : text}).then(console.log),
}

