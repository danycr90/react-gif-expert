import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', () => {
     
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });
      
    render(
      <GifGrid
        category={ category }  
      />
    )
    
    expect( screen.getByText( category ) );
    expect( screen.getByText('Cargando...') );

  })

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://one-punch.com'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://goku.com'
        }
    ]
    
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: true
    });

    render(
      <GifGrid
        category={ category }  
      />
    )
    
    expect( screen.getAllByRole('img').length ).toBe(2);
  })

})