import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas de getGifs()', () => {
  
    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );

        const testGif = {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        }

        expect( gifs[0] ).toEqual( testGif );
    })
  
})