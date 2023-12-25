import React , {useState} from 'react'
import './Edit.css';

const Editpage = () => {
    const [username1, setUsername1] = useState('');
    const [username2, setUsername2] = useState('');
    const [username3, setUsername3] = useState('');
    const [machineId, setMachineId] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form submitted:', { username1, username2, username3, machineId });
    };
  return (
    <div className='simple-form'>
        <div className="box">
       <form>
      <input
        required
        className="input-field"
        type="text"
        placeholder="Telegram Username 1"
        value={username1}
        onChange={(e) => setUsername1(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Telegram Username 2"
        value={username2}
        onChange={(e) => setUsername2(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Telegram Username 3"
        value={username3}
        onChange={(e) => setUsername3(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        required
        placeholder="Motor Id"
        value={machineId}
        onChange={(e) => setMachineId(e.target.value)}
      />
      <button className="login-button" onClick={handleSubmit}>
        Add User
      </button>
    </form>
    </div>
    </div>
  )
}

export default Editpage;
