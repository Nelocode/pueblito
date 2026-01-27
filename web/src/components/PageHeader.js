import styles from './Navbar.module.css'; // Just for standard imports if needed, or remove 
import FloatingDoodles from './FloatingDoodles';
import Image from 'next/image';

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <div className="page-header" style={{ color: bgImage ? '#fff' : 'var(--primary)' }}>
      
      {/* Background Image if provided */}
      {bgImage && (
        <>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
             <Image 
               src={bgImage} 
               alt="Header Background" 
               fill 
               style={{ objectFit: 'cover' }}
               priority
             />
          </div>
          {/* Overlay for contrast */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 1,
            background: 'linear-gradient(to bottom, rgba(0,59,92,0.6), rgba(0,0,0,0.2))' 
          }}></div>
        </>
      )}

      {/* Floating Doodles always on top of bg but behind text */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
        <FloatingDoodles />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1 style={{ color: bgImage ? '#fff' : 'var(--primary)' }}>{title}</h1>
        <p style={{ color: bgImage ? 'rgba(255,255,255,0.9)' : '#555' }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
