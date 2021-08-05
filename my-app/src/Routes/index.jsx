import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Home from '../Components/Home';
import Scorelist from '../Components/Scores';
import News from '../Components/News';
import MenuPage from '../Components/MenuPage.jsx';
import More from '../Components/More.jsx';
import LiveScoreBet from '../Components/LS-Bet.jsx';


const Routes = () => (
    <BrowserRouter>
            <Header></Header>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/scores' exact component={Scorelist} /> 
            <Route path='/news' exact component={News} />
            <Route path='/menu' exact component={MenuPage} />
            <Route path='/more' exact component={More} />
            <Route path='/ls_bet' exact component={LiveScoreBet} />
        </Switch>
    </BrowserRouter>
)

export default Routes