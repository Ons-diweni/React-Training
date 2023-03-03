export const Recommendation  = () => {

const currentMonth = new Date().getMonth () ;
console.log(currentMonth)
const isSpring = currentMonth => 2 && currentMonth <= 5 


return ( <div> {isSpring ? <div> C'est le printemps ! rempotez  </div> : <div> Ce n'est pas le moment de rempotez </div> } </div>  )

}