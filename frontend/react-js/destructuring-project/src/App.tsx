import { ActionButton } from './ActionButton'

type ProductDetails = {
  tagline?: string
  specs?: { material?: string } | null
}

function App() {
  const product = {
    name: 'Ergonomic Chair',
    price: 349,
    category: 'Furniture',
    ratings: [4.8, 4.6, 4.1],
    details: {
      tagline: 'Quality at scale',
      specs: null,
    } as ProductDetails | null,
  }

  const { name, price: displayPrice, category, ratings } = product
  const [firstRating, secondRating] = ratings // array destructuring — index 0 → firstRating, 1 → secondRating

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {displayPrice}</p>
      <p>Category: {category}</p>
      <p>First rating: {firstRating}</p>
      <p>Second rating: {secondRating}</p>
      {
        product.details?.tagline ?? 'No tagline available' // optional chaining — returns undefined if null // nullish coalescing — supplies fallback
      }
      {/*even though details now has a value, the ?. chain short-circuits at specs — which is null — so "Specs not listed" renders.*/}
      <p>{product.details?.specs?.material ?? 'Specs not listed'}</p>
      <ActionButton label="Add to Cart" onClick={() => alert('Added!')} />
    </div>
  )
}

export default App
