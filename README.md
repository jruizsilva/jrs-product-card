# JRS-Product-Card

Paquete de pruebas

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jrs-product-card'
```
```
<ProductCard
  product={product}
  initialValue={{ count: 4, maxCount: 10 }}
>
  {({ count, increaseBy, reset, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```