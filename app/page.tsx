import Image from 'next/image'

export default async function Home() {
  return (
    <div className="relative w-screen h-screen left-[-50vw] ml-[50%]">
      <Image
        src="https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        alt="자연"
        fill
      />
    </div>
  )
}
