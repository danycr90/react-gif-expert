import { render, screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas de <GifExpertApp />', () => {
     
  test('debe renderizar la página', () => {
      
    const { container } = render(
      <GifExpertApp
        onNewCategory={ () => {} }   
      />
    )

    screen.debug()
    expect( container ).toMatchSnapshot();
  })

})