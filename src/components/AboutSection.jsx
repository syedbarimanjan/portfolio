
export const AboutSection = () => {
	return (
		<section className="flex h-screen gap-7 p-7 border-b-4 border-black justify-center items-center">
			<div className="flex flex-col gap-3 w-96">
				<h1 className="text-5xl">About Myself</h1>
				<p>
					3+ years of developing, strategizing and delivering cutting
					edge solutions within deadline. Optimizing, migrating and
					maintaining legacy applications with ownership.
				</p>
				<p>
					Always up-to date with new technology in the market with
					working PoC on side projects.
				</p>
				<p>
					Experienced with cloud technologies & data engineering
					techniques for any data intensive or ETL tasks.
				</p>
				<button className="shadow-dark-shadow bg-bright-pink border-4 border-black px-5 py-3">View Resume</button>
			</div>
			<div className="shadow-dark-shadow-l border-4 border-black">
                <img src="/myPic.png" alt="" />
            </div>
		</section>
	);
};
