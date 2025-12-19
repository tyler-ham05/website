import { useEffect, useState } from "react";
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import HeatMap from '@uiw/react-heat-map'

const LeetCodeStats = ({ stats, loading, subStats }) => {
  
  return (
    <div className="statscard">
      {loading ? (
        <div className="spinner" aria-label="Loading" />
      ) : (
        <>
          <h1>LeetCode</h1>
          <div className="lc_content">
            <div className="glance">

              <h2>Total Solved: {stats.totalSolved}</h2>
              <PieChart
                series={[
                  {
                    innerRadius: 30,
                    paddingAngle: 3,
                    cornerRadius: 5,
                    highlightScope: { highlighted: 'none', faded: 'none' },
                    arcLabel: null,
                    data: [
                      { id: 0, value: stats.easySolved, label: 'easy', color: '#70b93b' },
                      { id: 1, value: stats.mediumSolved, label: 'medium', color: '#facc15' },
                      { id: 2, value: stats.hardSolved, label: 'hard', color: '#ed4a46' }
                    ],
                  },
                ]}
                width={200}
                height={200}
                hideLegend={true}
                sx={{
                  [`& .${pieArcClasses.root}`]: {
                    stroke: 'none',
                    strokeWidth: 0,
                  },
                }}
              />
              <p><strong>Easy:</strong> {stats.easySolved}</p>
              <p><strong>Medium:</strong> {stats.mediumSolved}</p>
              <p><strong>Hard:</strong> {stats.hardSolved}</p>
            </div>
            <div className="card">
              {Object.entries(subStats).slice(0,3).map((problem) =>
              (
                <div className="inner-card">
                  <h3>{problem[0]}</h3>
                  <p>Number of submissions: {problem[1].num_submissions}</p>
                  <p>{new Date(problem[1].timestamp * 1000).toLocaleDateString()}</p>
                </div>
              )
              )}
            </div>
          </div>
        </>
      )}
    </div>

  )
}


function Stats() {
  const [stats, setStats] = useState({})
  const [subStats, setSubStats] = useState({})
  const [totalContributions, setTotalContributions] = useState(0)
  const [githubEvents, setGithubEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  useEffect(() => {
    setLoading(true)
    fetch("/api/leetcode")
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
        const subMap = {}
        for (const submission of data.recentSubmissions) {
          if (submission.title in subMap) {
            subMap[submission.title]["num_submissions"] += 1
          }
          else {
            subMap[submission.title] = { "num_submissions": 1, "timestamp": submission.timestamp }
          }
        }
        setSubStats(subMap)
      })
      .catch(err => console.error(err));
    fetch("/api/github")
      .then(res => res.json())
      .then(data => {
        var result = []
        console.log(data)
        setTotalContributions(data.data.user.contributionsCollection.contributionCalendar.totalContributions)
        var weekly = data.data.user.contributionsCollection.contributionCalendar
  
        for(let week of weekly.weeks){
          for(let entry of week.contributionDays){
            if(entry.contributionCount > 0){
              result.push({"date":entry.date.split("-").join("/"), "count":entry.contributionCount})
            }
          }
        }
        setGithubEvents(result)
      })
  }, [])

  return (
    <div>
      Check out my stats!
      <div className='overview'>
        <LeetCodeStats stats={stats} loading={loading} subStats={subStats}></LeetCodeStats>
      </div>
      <div className="overview">
        <div className="statscard">
          <h1>GitHub</h1>
          <div className="github">
            <h2>Yearly Contributions: {totalContributions}</h2>
            {mediaQuery.matches ? 
            <HeatMap
              style={{ color: 'white' }}
              width={800}
              rectSize={20}
              value={githubEvents}
              weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
              startDate={new Date(new Date().setDate(new Date().getDate() - 200))}
              rectProps={{
                rx: 3
              }}
            />
            :
            <HeatMap
              style={{ color: 'white' }}
              width={400}
              rectSize={15}
              value={githubEvents}
              weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
              startDate={new Date(new Date().setDate(new Date().getDate() - 120))}
              rectProps={{
                rx: 3
              }}
            />
            }

            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats

