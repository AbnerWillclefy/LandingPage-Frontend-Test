import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Register from '../pages/Register'

export default function Routes() {
    return (
        <Switch>
            <Route path='/register' component={Register} exact/>
            <Route path='/' component={Homepage} exact/>
        </Switch>
    )
}