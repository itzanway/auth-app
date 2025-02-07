import Link from 'next/link';
import styles from '../styles/styles.module.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';


function HomePage() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
      setIsMetaMaskInstalled(!!window.ethereum);    
  });

  async function handleMetaMaskLogin() {

  }

  return (
    <div className={styles.container}>  
      <h1>Auth App</h1>
      <div>
        <button className={styles.btn}  onClick={handleMetaMaskLogin}> Login with MetaMask </button>

        <br />
        <br />
      </div>
      <Link href="signup">
      <button className={styles.btn}> SignUp</button>
      </Link>
    </div>
  );
}

export default HomePage;
