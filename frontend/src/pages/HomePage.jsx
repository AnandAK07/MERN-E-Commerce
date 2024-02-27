import { MainCarousel } from "./MainCarousel"
import PaginationExample from "./Pagination"




const HomePage = () => {

  return (
    <>
      <MainCarousel />
      {/* key={product.id} href={product.href}  */}
      <PaginationExample />
    </>
  )
}

export default HomePage;