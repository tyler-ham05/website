export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app/tham112",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    if (!response.ok) {
      const text = await response.text();
      console.error("Upstream error:", response.status, text);
      return res.status(502).json({
        error: "LeetCode API failed",
        status: response.status,
      });
    }
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: `Failed to fetch LeetCode data: ${err}` })
  }
}