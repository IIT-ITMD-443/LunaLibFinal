function Home() {
  return (
    <div className="home-page">

      <div className="home-section">
        <div className="section-header">
          <h2>In Progress</h2>
          <span>5 Books</span>
        </div>
        <div className="book-row">
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
        </div>
      </div>

      <div className="home-section">
        <div className="section-header">
          <h2>Unread</h2>
          <span>5 Books</span>
        </div>
        <div className="book-row">
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
        </div>
      </div>

      <div className="home-section">
        <div className="section-header">
          <h2>Completed</h2>
          <span>3 Books</span>
        </div>
        <div className="book-row">
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
        </div>
      </div>

      <div className="home-section">
        <div className="section-header">
          <h2>Wishlist</h2>
          <span>3 Books</span>
        </div>
        <div className="book-row">
          <div className="book-card"></div>
          <div className="book-card"></div>
          <div className="book-card"></div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="total-books-box">
          <h3>Total Books</h3>
          <div className="total-boxes">
            <div className="total-box">
              <h4>5</h4>
              <p>Completed</p>
            </div>
            <div className="total-box">
              <h4>5</h4>
              <p>Completed</p>
            </div>
            <div className="total-box">
              <h4>5</h4>
              <p>Completed</p>
            </div>
          </div>
        </div>

        <div className="next-read-box">
          <h3>Your Next Read</h3>
          <div className="next-read-content">
            <div className="next-read-image"></div>
            <div className="next-read-info">
              <h4>The Raven</h4>
              <p>Edgar Allan Poe</p>
              <p>352 pages</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
