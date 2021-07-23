import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Home from '../Components/Home';
import Scorelist from '../Components/Scores';
import News from '../Components/News';
import MenuPage from '../Components/MenuPage.jsx';
import LivescoreBet from '../Components/LivescoreBet.jsx';


const Routes = () => (
    <BrowserRouter>
            <Header></Header>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/scores' exact component={Scorelist} /> 
            <Route path='/news' exact component={News} />
            <Route path='/menu' exact component={MenuPage} />
            <Route path='/livescore-bet' exact component={LivescoreBet} />
        </Switch>
    </BrowserRouter>
)

export default Routes