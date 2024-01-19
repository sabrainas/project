import { Form } from './components/Form'
import {Layout} from './components/Layout'
import { Student } from './components/Student'


function App() {


  return (
    <Layout>
      <h1 className="text-4xl font-medium text-white">Hello world</h1>
      <Form />
      <Student />
    </Layout>
  )
}

export default App