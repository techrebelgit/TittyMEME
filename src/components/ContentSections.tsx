import { Button } from "@/components/ui/button"

export default function ContentSections() {
  const jupiterSwapUrl = "https://jup.ag/swap/SOL-45C1NSdYrbkT1etufJGLB7rEYsj2JbfFTswreDRNbjxx"
  const contractAddress = "45C1NSdYrbkT1etufJGLB7rEYsj2JbfFTswreDRNbjxx"

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-32">
      {/* Welcome Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl text-pink-500 mb-8">Welcome to TittyLabs</h1>
        <p className="text-xl md:text-2xl font-bold tracking-wide text-gray-300">
          Big Ideas. Juicy Memes. Web3 Without the BS.
        </p>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          <span className="text-pink-400 text-xl">💖</span> 
          We're here to build, to shake things up, and to take TITTY to the next level.
        </p>
      </section>

      {/* What is TittyLabs Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl text-center text-pink-500">What is TittyLabs?</h2>
        <div className="prose prose-invert mx-auto text-gray-300 max-w-3xl space-mono-text">
          <p className="text-lg leading-relaxed">
            We're the degen venture lab behind TITTY-powered products—building a new era of classy Web3 entertainment.
          </p>
          <p className="text-lg leading-relaxed">
            The world of adult content has lost its way. —too incestuous, too extreme, and dangerously harmful. We're here to pump
            life back into the industry with a platform that's all about:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-pink-400 mr-2 text-xl">🔥</span>
              <span>Pretty girls. Juicy memes. Real ownership.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2 text-xl">💸</span>
              <span>Web3 tools that empower creators, not exploit them.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2 text-xl">🚀</span>
              <span>A community-first approach where the culture drives the product.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl text-center text-pink-500">What We're Building</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 p-6 hover:border-pink-500/50 transition-all">
            <div className="text-4xl mb-4">👀</div>
            <h4 className="text-xl font-bold mb-2 tracking-wide">The First Web3 Adult Platform</h4>
            <p className="text-gray-300">A classy, picture-based platform powered by TITTY.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 p-6 hover:border-pink-500/50 transition-all">
            <div className="text-4xl mb-4">🤑</div>
            <h4 className="text-xl font-bold mb-2 tracking-wide">A Creator-First Economy</h4>
            <p className="text-gray-300">No middlemen, no BS, just fans and creators connecting directly.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 p-6 hover:border-pink-500/50 transition-all">
            <div className="text-4xl mb-4">🎭</div>
            <h4 className="text-xl font-bold mb-2 tracking-wide">The Meme-Powered Movement</h4>
            <p className="text-gray-300">Big, fun, and built to last.</p>
          </div>
        </div>
      </section>

      {/* Why TITTY Section */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-pink-500">Why TITTY?</h2>
        <ul className="space-y-2 text-lg text-gray-300 text-center">
          <li>Because Web3 needs a token that turns heads.</li>
          <li>Because creators deserve a platform that supports them.</li>
          <li>Because this niche is wide open—and we're taking it.</li>
        </ul>
      </section>

      {/* Buy Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl text-center text-pink-500">Buy</h2>
        <div className="max-w-md mx-auto space-y-4">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 p-4">
            <p className="text-gray-400 text-sm mb-2">Contract Address:</p>
            <div className="bg-black/60 p-2 border border-gray-700 text-gray-300 font-mono text-sm break-all">
              {contractAddress}
            </div>
          </div>
          <div className="text-gray-400">Or</div>
          <a href={jupiterSwapUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-transparent border border-gray-500 text-gray-300 hover:bg-pink-500/10 hover:border-pink-500 transition-all duration-300 px-8 py-6 h-auto text-lg uppercase tracking-wider space-mono-text">
              Buy on Jupiter
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-pink-500">Join the Movement.</h2>
        <p className="text-xl text-gray-300">Hold TITTY. Support the vision. Be part of something big and juicy.</p>
        <div className="pt-4">
          <a href={jupiterSwapUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-transparent border border-gray-500 text-gray-300 hover:bg-pink-500/10 hover:border-pink-500 transition-all duration-300 px-8 py-6 h-auto text-lg uppercase tracking-wider space-mono-text">
              Buy $TITTY Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

