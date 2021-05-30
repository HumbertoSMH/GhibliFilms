import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from "../hooks/useFetchFilms";

describe('Pruebas a los Hooks', () => {
	test('Prueba de useFetch, debe regresar un arreglo con longuitud > 0', async () => {
		const { result, waitForNextUpdate } = renderHook( () => useFetch()); 
		const { films, loading, error } = result.current;
		//await waitForNextUpdate();
		expect(films.length).not.toBe(0); 
		expect(loading).toBe(false);
		expect(error).toBe(null);
	});
});
