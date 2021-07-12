import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Home from '../Components/Home';
import Scorelist from '../Components/Scores';
import News from '../Components/News';


const Routes = () => (
    <BrowserRouter>
            <Header></Header>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/scores' exact component={Scorelist} /> 
            <Route path='/news' exact component={News} />
        </Switch>
    </BrowserRouter>
)

export default Routes