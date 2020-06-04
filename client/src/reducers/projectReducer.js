import { v4 as uuid } from 'uuid';
import { GET_PROJECTS } from '../actions/types.js';

const initialState = {
	projects: [
		{
			id: uuid(),
			name: 'Adopt-A-Pet',
			languages: ['Ruby', 'Sinatra'],
			website: 'http://adopt-a-pet.com'
		},
		{
			id: uuid(),
			name: 'Planet Saver',
			languages: ['JavaScript', 'Vue.JS'],
			website: 'http://planetsaver.xyz'
		},
		{
			id: uuid(),
			name: 'Check Mate!',
			languages: ['Java', 'React.JS'],
			website: 'http://checkmate.com'
		}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_PROJECTS:
			return {
				...state
			}
		default:
			return state;
	}
}
