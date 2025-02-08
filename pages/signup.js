import { useState ,useEffect} from 'react';
import styles from '../styles/signup.module.css';


function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Assuming isAuth() is now a defined function
    isAuth() ? setAuth(true) : setAuth(false);
  }, []);
  const authStatus = isAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    console.log(response)
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
    {authStatus ? <p>Authenticated</p> : <p>Not Authenticated</p>}
    <h1>Sign up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span className={styles.label}>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={styles.input}
          />
        </label>
        <label>
          <span className={styles.label}>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
