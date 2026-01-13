import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '64px', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          🎉 Success!
        </h1>
        
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#e2e8f0' }}>
          Azure Cloud Resume Challenge
        </h2>
        
        <p style={{ fontSize: '20px', color: '#94a3b8', marginBottom: '30px' }}>
          Your deployment is working! React is running successfully on Azure.
        </p>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>✅ Build: Successful</p>
          <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>✅ Deployment: Complete</p>
          <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>✅ React: Rendering</p>
          <p style={{ color: '#cbd5e1' }}>✅ Azure Static Web Apps: Online</p>
        </div>
        
        <p style={{ fontSize: '16px', color: '#64748b' }}>
          Now you can replace this with your full Azure Cloud Resume Challenge content!
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
