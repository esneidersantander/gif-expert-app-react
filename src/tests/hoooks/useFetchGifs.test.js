import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'


describe('preubas en el hoook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate}= renderHook(()=>useFetchGifs('One punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data.length).toBe(0);
        expect(loading).toBe(true);
        
    })
    
    
    test('debe de retornar un arreglo de iamgenes y el loading en false', async() => {
        const {result, waitForNextUpdate}= renderHook(()=>useFetchGifs('One punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    })
    
    
})
