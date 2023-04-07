import Link from "next/link"


const Error = () => {
  return (
    <>
        <h1>Page not found!!!</h1>
        <Link href='/'>
            go back!
        </Link>
    </>
  )
}

export default Error