import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
      </header>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          Welcome to Antique Treasures, where history meets craftsmanship. We are passionate about preserving and celebrating the beauty of antique working objects. From vintage typewriters to classic gramophones, vinyl players, and antique watches, our collection tells a story of innovation and artistry from bygone eras.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1706043911710-a22a22c7aa2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFudGlxdWUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Antique Store" 
          style={styles.image}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Journey</h2>
        <p style={styles.text}>
          Our journey began with a simple passion for antiques. What started as a personal collection quickly evolved into a mission to share these timeless treasures with the world. Our founder, Srijan, spent years scouring estate sales and auctions to find the perfect pieces that reflect the elegance and nostalgia of the past.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Journey" 
          style={styles.image}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Collection</h2>
        <p style={styles.text}>
          At Antique Treasures, we offer a curated selection of working antiques. Our collection includes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Typewriters - The elegance of classic writing machines</li>
          <li style={styles.listItem}>Gramophones - A nostalgic sound experience</li>
          <li style={styles.listItem}>Vinyl Players - Music as it was meant to be heard</li>
          <li style={styles.listItem}>Vinyl Records - The classic soundtracks of the past</li>
          <li style={styles.listItem}>Antique Books - Rare and First Edition Books</li>
        </ul>
        <img 
          src="https://images.unsplash.com/photo-1524779709304-40b5a3560c60?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Collection" 
          style={styles.image}
        />
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Thank you for visiting Antique Treasures. We invite you to explore our collection and experience the charm of history's finest creations.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundImage: "url('https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for header
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5em',
    color: '#fff',
    margin: '0',
  },
  section: {
    marginBottom: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for sections
    padding: '20px',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#f0f0f0',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.1em',
    color: '#ddd',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    marginTop: '20px',
  },
  list: {
    listStyleType: 'circle',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #ddd',
    marginTop: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for footer
    padding: '10px',
    borderRadius: '8px',
  },
  footerText: {
    fontSize: '1em',
    color: '#ddd',
    margin: '0',
  },
};

export default About;
