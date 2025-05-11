
function Protected() {
  router.post("/logout", (req, res) => {
    res.json({ message: "Logged out successfully" });
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      alert("Logged out successfully!");
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  });

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.removeItem("token");
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <h1>Protected Route</h1>
      <p>This is a protected route that requires authentication.</p>
      <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
      </form>
      <p>Click the button to log out.</p>
    </div>
  );
}

export default Protected;
