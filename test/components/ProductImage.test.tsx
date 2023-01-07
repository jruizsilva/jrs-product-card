import React from 'react';
import { create } from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage />', () => {
  test('Debe mostrar el componente con la imagen pasada en las props', () => {
    const wrapper = create(<ProductImage img={product2.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar una imagen por defecto obtenida del componente <ProductCard/>', () => {
    const wrapper = create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
