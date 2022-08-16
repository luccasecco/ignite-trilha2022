import bgImg from '../../assets/cover.svg'

export function Header() {
  return (
    <div
      style={{backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", width: "100%", height: "18.5rem", backgroundPosition: "center", backgroundSize: "cover"}}>
    </div>
  )
}