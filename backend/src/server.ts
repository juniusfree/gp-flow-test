import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;

if (!process.env.PORT) {
  console.warn(
    "Using default port 5000 as PORT environment variable is not set."
  );
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
