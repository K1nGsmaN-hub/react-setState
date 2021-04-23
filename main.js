class ClassComponent {
	constructor(props) {
		this.props = props
	}

	_logError(bool, opName, errorMsg) {
		if (!bool) {
			throw new Error(`${opName}: ${errorMsg}`)
		}

		return
	}

	setState = function(newState, cb=function() {}, state = this.state) {
		this._logError(
			typeof newState === 'object' || 
			typeof newState === 'function' || 
			newState === null, 'setState', 'Partitial state should be an object'
		)

		let partState = {}

		try {
			partState = {...newState()}
		} catch(e){
			partState = {...newState}
		}

		this.state = {
			...state,
			...partState
		}

		cb()
		return
	}
}