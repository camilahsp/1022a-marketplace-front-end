import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}

type UserType = {
  id:string,
  nome:string,
  email:string,
  created_at:string,
  updated_at:string,

}


function App() {
  const [nome,  setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  const [usuarios, setUsuarios] = useState<UserType[]>([])

  //useEffects(o que fazer, quando fazer) []+=> hora do carregamento da página
  useEffect(()=>{
    setNome("Guilherme Terenciani")
    // buscar os dados do backEnd
    fetch("https://one022a-marketplace2.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
    // colocar em uma variável
  },[])

  return (
    <>
     <h1>{nome}</h1>
     <div className="produtos-container">
      {
        produtos.map(produto=> {
          return(
            <div key={produto.id} className="produto-item"> 
            <h1>{produto.nome}</h1>
            <div className='coitainer-imagem'>
              <img src={produto.imagem} alt="Imagem do celular"></img>
            </div>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          </div>
          )
        })
      }

     </div>
    </>
  )

  useEffect(()=>{

    // buscar os dados do backEnd
    fetch("https://one022a-marketplace2.onrender.com/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
    // colocar em uma variável
  },[])
  
  return (
    <>
     <h1>{nome}</h1>
     <div className="usuarios-container">
      {
        usuarios.map(usuario=> {
          return(
            <div key={usuario.id} className="usuario-item"> 
            <h1>{usuario.nome}</h1>
            <p>{usuario.email}</p>
            <p>{usuario.created_at}</p>
            <p>{usuario.updated_at}</p>
          </div>
          )
        })
      }
  
     </div>
    </>
  )
  

}








export default App 

