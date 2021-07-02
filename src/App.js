import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

// Para começar nosso grande projeto, primeiro de tudo vou preparar o react router. Normalmente a gente fazia imports individuais de cada uma das páginas, contudo para projetos grandes isso se torna inviável, poluindo o ambiente com dezenas de imports. Para remediar isso fiz um um arquivo index na pasta páginas e lá sim fiz todos os imports necessários, assim aqui no app ficando:
import {Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute} from './pages'
// Agora sim com todas as páginas importadas, podemos preparar o Router. Lembrando que o Nav, sidebar e o footer eles se mantem em todas as páginas, por isso ficam fora do switch:

function App() {
  return (
  <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/products'>
        <Products />
      </Route>
      {/* para as paginas dos produtos individuais preparados o parametro url que vai ser o id : */}
      <Route exact path='/products/:id' children={<SingleProduct />} />
      <Route exact path='/checkout'>
        <Checkout />
      </Route>
      {/* para a página de erro colocamos o caminho sendo * pois irá servir para qualquer um, até por isso ele deve vir no final na lista do Router/Switch, pois será qualquer caminho além dos que já definidos antes dele  */}
      <Route path='*'>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </Router>)
}

export default App
