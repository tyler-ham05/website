const GITHUB_API_KEY = process.env.GITHUB_API_KEY

const query = `
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${GITHUB_API_KEY}`
      },
      body: JSON.stringify({
        query,
        variables: { userName: "tyler-ham05" },
      })
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Github data" })
  }
}