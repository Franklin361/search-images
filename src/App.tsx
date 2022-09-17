import { Title, Form, GridResults } from './components';
import { useFormQuery } from "./hooks";

const App = () => {

  const { handleLoading, handleSubmit, isLoading, query } = useFormQuery()

  return (
    <div>
      <Title />

      <Form handleSubmit={handleSubmit} isLoading={isLoading} />

      {query.length > 0 && <GridResults query={query} handleLoading={handleLoading} />}
    </div>
  )
}
export default App
