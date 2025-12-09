

function App() {
  return (
    <Router>
      <div className="container mt-4">
          import logo from './logo192.png';
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={logo} alt="OctoFit Logo" className="App-logo" />
              OctoFit Tracker
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <div className="mb-4">
          <h1 className="display-4 text-center fw-bold">Welcome to OctoFit Tracker</h1>
          <p className="lead text-center">Track your fitness activities, teams, leaderboard, users, and workouts with style!</p>
        </div>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
