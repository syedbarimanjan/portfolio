export const HeroSection = () => {
	return (
		<section className="snap-start border-b-4 border-black h-screen bg-bright-green flex flex-col p-7 justify-center items-center gap-3">
			<h1 className="text-7xl">Hi! I am your friendly</h1>
			<h1 className="text-7xl">nighborhood coding buddy</h1>
			<div className="flex flex-col justify-center items-center">
                <p>
                    A passionate CS graduate engineer who enjoys creating
                    high-quality software that
                </p>
                <p>
                    meets the needs of clients and customers. Let's bring ideas to
                    life together!
                </p>
            </div>
			<div className="flex gap-3">
				<button className="shadow-dark-shadow bg-bright-yellow border-4 border-black px-5 py-3">View Resume</button>
				<button className="shadow-dark-shadow bg-bright-yellow border-4 border-black px-5 py-3">Connect With Me</button>
			</div>
		</section>
	);
};
