import { Link, routes } from '@redwoodjs/router'

const DashboardPage = () => {
  return (
    <>
      <h1>DashboardPage</h1>
      <p>
        Find me in <tt>./web/src/pages/DashboardPage/DashboardPage.js</tt>
      </p>
      <p>
        My default route is named <tt>dashboard</tt>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </>
  )
}

export default DashboardPage
