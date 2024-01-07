import githubLogo from "../assets/github-mark.svg";

export const Nav = () => {
  return (
    <nav className="flex justify-between p-7 border-b-4 border-black">
        <div className="flex items-center"><h1 className="text-5xl">Syed.Bariman.Jan</h1></div>
        <div className="flex gap-11">
          <a href="" className="flex items-center text-3xl">About</a>
          <a href="" className="flex items-center text-3xl">Projects</a>
          <a href="https://github.com/syedbarimanjan/" className="flex items-center text-3xl gap-1"><img className="w-11" src={githubLogo} alt="Github Logo" />Github</a>
        </div>
    </nav>
  )
}