import { useQuery } from "@apollo/client"
import { gql } from "./__generated__";
import { LoginForm } from "./components/login-form";

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
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}