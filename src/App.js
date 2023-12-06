import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { deleteuser, getuser, postuser, updateuser } from './toolkit/api/appi';

function App() {

  const [post, setpost] = useState({})
  const [final, setfinal] = useState({})
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data)
  console.log(data);

  useEffect(() => {
    dispatch(getuser())
  }, [])

  const change = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value })
  }

  const editchange = (e) => {
    setfinal({ ...final, [e.target.name]: e.target.value })
  }

  const submit = () => {
    dispatch(postuser(post))
  }

  const deletedata = (id) => {
    dispatch(deleteuser(id))
    console.log(id);
  }

  const editdata = (val) => {
    setfinal(val)
  }

  const update = () => {
    dispatch(updateuser(final))
  }

  return (
    <div>
      <div>
        <div>
          <input type='text' placeholder='title' name='title' onChange={change} />
        </div>
        <div>
          <input type='text' placeholder='author' name='author' onChange={change} />
        </div>
        <button onClick={submit}>submit</button>
      </div>

      <h2>updatedata</h2>
      <div>
        <div>
          <input type='text' placeholder='title' name='title' onChange={editchange} value={final.title} />
        </div>
        <div>
          <input type='text' placeholder='author' name='author' onChange={editchange} value={final.author} />
        </div>
        <button onClick={update}>Update</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>author</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.author}</td>
                  <td>
                    <button onClick={() => deletedata(val.id)}>Delete</button>
                    <button onClick={() => editdata(val)}>Update</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
