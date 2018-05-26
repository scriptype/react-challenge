import React from 'react'
import { Link } from 'react-router'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const HomePage = () => (
  <Card className="container">
    <CardHeader title="Cuttlesoft - React Challenge" subheader="This is the home page." />
    <CardActions>
      <Button variant="flat">
        <Link to="/signup">Sign Up</Link>
      </Button>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
    </CardActions>
  </Card>

)

export default HomePage
