import Contador from '../Contador'
import { shallow } from 'enzyme'


describe('Pruebas sobre el componente contador',()=>{

    
 
 
 
 
   test('Pruebas al boton restar',() => {
     const wrapper = shallow(<Contador num1={10} num2={5} nombre={'Cristian Arvey Guzman'} />)
     const btn1 = wrapper.find('button').at(1).simulate('click')
     const contando = wrapper.find('h3').text().trim()
     expect(contando).toBe(`señor Cristian Arvey Guzman la Resta de los numeros es 5`)
   
   })

   test('Pruebas al boton Sumar',() => {
    const wrapper = shallow(<Contador num1={10} num2={5} nombre={'Cristian Arvey Guzman'} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h3').text().trim()
    expect(contando).toBe(`señor Cristian Arvey Guzman la Suma de los numeros es 15`)
  
  })
 
  
 })
 