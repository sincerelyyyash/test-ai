"use effect"
export default function PingServer() {

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1";

    const intervalId = setInterval(() => {
      fetch(`${baseUrl}/user/alive`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // console.log("Server is alive:", data.message);
        })
        .catch((error) => {
          console.error("Failed to ping server:", error);
        });
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);
}
