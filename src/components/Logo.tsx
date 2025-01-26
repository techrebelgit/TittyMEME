import Image from "next/image"

export default function Logo() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <Image src="/logo.png" alt="Memecoin Logo" fill style={{ objectFit: "contain" }} />
    </div>
  )
}

