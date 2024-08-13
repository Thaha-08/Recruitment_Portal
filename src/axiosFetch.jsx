function axiosFetch() {
  fetch("url")
    .then((Res) => Res.json())
    .then((res) => console.log(res));

  fetch("url").then((res) => console.log(res.data));

  //POST
  /*
  const[user,setUser]=useState("")
  const[call,setCall]=useState(false);
  const postUser =(e) =>{
    Axios.post("url backend") .then(res=> setUsers(res.data))
    }

    use Effect(() => {axios.get("url back end"),{name:name} })
    .then(res => setUsers([...user, res.data]))
    .then(() => setCall(!call))



  <input type="text" value={name} onChange={(e) => steName(e.target.value) } > 
  <button onClick={postUser}> Post<button>

  */

  return <div></div>;
}

export default axiosFetch;
