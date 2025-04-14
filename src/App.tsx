import { useQuery } from "@apollo/client"
import { gql } from "./__generated__";

const GET_USERS = gql(`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`)

function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return data && data.users?.map(({id, name, email }) => (
    <div key={id}>
      <h3>{name}</h3>
      <b>Email:</b>
      <p>{email}</p>
    </div>
  ))
}

export default function App() {
  
  return (
    <div>
      <h2>My first Apollo App!!</h2>
      <p>Suuuu!!</p>
      <br />
      <DisplayUsers />
    </div>
  )
}