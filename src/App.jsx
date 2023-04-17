import { InputText } from "./assets/components/InputText"
import { Title } from "./assets/components/Title"


const App = () => {
 
  return (
    <>
      <Title title='Olá meu é Paulo'/>

    <InputText 
     name="nome" 
     id="nome" 
     placeholder="nome"
         />

    <InputText
    name="sobrenome" 
    id="sobrenome" 
    placeholder="sobbrenome"/>
  
    
    </>
  )
}

export default App
