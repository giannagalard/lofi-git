import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <h1>Page Not Found</h1>
        <Link className="card-link" to="/employees">
          Back
        </Link>
      </div>
    </div>
  );
}
