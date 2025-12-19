import { VercelRequest, VercelResponse } from "@vercel/node"

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch LeetCode data" })
  }
}
