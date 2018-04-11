import React from "react"
import Immutable from "immutable"
import ReduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import AppRoot from "./src/containers/AppRoot"
import reducers from "./src/redux/reducers"
import {composeWithDevTools} from 'redux-devtools-extension';

import i from './src/lib/dataEmitter'

export default class App extends React.Component {

	render() {
		const store = createStore(reducers, Immutable.Map(),composeWithDevTools( applyMiddleware(ReduxThunk)))
		i(store);
		store.dispatch({type:'loaded'})
		return (
			<Provider store={store}>
				<AppRoot />
			</Provider>
		)
	}
}
