import App from '../App'

export default new [{
	path: '/',
	component: App,
	children: [{
		path: '',
		component: r => require.ensure([], () => r(require('../page/home')), 'home')
	}]
}]
