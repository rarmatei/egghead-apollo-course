import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Container } from "@chakra-ui/react";

function App() {
  const { data, loading } = useQuery(gql`
    query {
      hello
    }
  `);
  return <Container>{loading ? "loading.." : data.hello}</Container>;
}

export default App;
