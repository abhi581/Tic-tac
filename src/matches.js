
export default function Navbar({ O, X, total}) {

  return (
    <div className='result'>
      <p>O Wins = {O}</p>
      <p>Total Match = {total}</p>
      <p>X Wins = {X}</p>
    </div>
  )
}