import {getFilmById, getFilmsByRegex} from '../helpers/FilmsHelper';

const dataPrueba = [
	{
		id: '123',
		title: 'Totoro', 
		description: 'Vecino'
	},
	{
		id: '321',
		title: 'MI VECINO TOTORO', 
		description: 'otra descripción'
	},
	{
		id: '555',
		title: 'El tipo Toto', 
		description: 'un'
	},
	{
		id: '111',
		title: 'el viaje', 
		description: 'sin descripción'
	}
];
describe('Pruebas de los Helpers', () => {
	test('Prueba getFilmById, IdExistente', () => {
		const id = '111'; 
		const film =  getFilmById(id, dataPrueba);
		expect(film.title).toBe('el viaje');
	});

	test('Prueba getFilmById, idVacio', () => {
		const id = '';
		const film = getFilmById(id, dataPrueba);
		expect(film).toBe(undefined);
	})
	

	test('Prueba getFilmsByRegex, Busqueda por titulo', () => {
		const titleTest = 'toto'; 
		const films =  getFilmsByRegex(titleTest, dataPrueba);
		expect(films.length).toBe(3);
	});

	test('Prueba getFilmsByRegex, Busqueda con Mayusculas ', () => {
		const titleTest = 'TOTORO'; 
		const films =  getFilmsByRegex(titleTest, dataPrueba);
		expect(films.length).toBe(2);		
	});
	
	test('Prueba getFilmsByRegex, Busqueda por descripción', () => {
		const titleTest = 'vecino'; 
		const films =  getFilmsByRegex(titleTest, dataPrueba);
		expect(films.length).toBe(2);	
	});
});
 