const paths = [
  { title: 'Students', desc: 'Browse projects, build experience', link: '/register?role=student' },
  { title: 'Companies', desc: 'Post your brief, find talent', link: '/register?role=company' },
];
const UserPaths = () => (
  <div className="user-paths">
    {paths.map(p => (
      <div key={p.title} className="card">
        <h3>{p.title}</h3><p>{p.desc}</p>
        <Link to={p.link} className="btn btn-secondary">Get Started</Link>
      </div>
    ))}
  </div>
);
export default UserPaths;
