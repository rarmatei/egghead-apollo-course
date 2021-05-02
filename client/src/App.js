import "./App.css";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { data, loading } = useQuery(gql`
    query {
      hello
    }
  `);
  return <>{loading ? "loading.." : data.hello}</>;
}

export default App;
