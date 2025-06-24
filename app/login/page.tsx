// import React from 'react';
// export default function Login(): React.ReactElement {
//   return (
//     <div style={{
//       height: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       padding: '20px',
//       gap: '20px'
//     }}>
//       <h1 style={{
//         fontSize: '2rem',
//         fontWeight: 'bold',
//         color: '#333',
//       }}>
       
//       </h1>

//       <img
//         src="/splash-v2-7.jpg"
//         alt="Login Visual"
//         style={{
//           width: '300px',
//           maxWidth: '100%',
//           borderRadius: '12px',
//           boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//         }}
//       />
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = /^\d{10}$/.test(phone.trim());
    if (isValid) {
      setError('');
      router.push('/');
    } else {
      setError('Enter a valid 10-digit phone number');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/splash-v2-7.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',          
        backgroundPosition: 'top center',
        width: '100%',
        height: '100vh',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
      }}
    >
      <form
        onSubmit={handleContinue}
        style={{
          width: '85%',
          maxWidth: '330px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '40px',
        }}
      >
        <input
          type="tel"
          placeholder=""
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{
            padding: '12px',
            fontSize: '1rem',
            border: 'none',
            borderBottom: '2px solid #a76ff4',
            background: 'transparent',
            color: '#000',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#a76ff4',
            color: '#fff',
            fontSize: '1rem',
            padding: '12px',
            borderRadius: '24px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Continue
        </button>
        {error && (
          <p style={{ color: 'red', fontSize: '0.85rem', textAlign: 'center' }}>{error}</p>
        )}
        <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '4px', color: '#555' }}>
          By continuing, I agree to Furrl’s <u>T&C</u> and <u>Privacy Policy</u>
        </p>
      </form>
    </div>
  );
}
