// Import Assets
import CryptoExchangeDapp from '../assets/CryptoExchangeDapp.png';
import NFTCardGame from '../assets/NFTCardGame.png';
import CrowdFundingApp from '../assets/CrowdFundingApp.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Uniswap Clone</h3>
                    <img src={CryptoExchangeDapp} alt="Uniswap Swap Page" />
                    <p>
                      I'm currently working on a project to create a clone of Uniswap, as part of my exploration into decentralized finance (DeFi) platforms. 
                      This project involves studying Uniswap's smart contract architecture and building a similar system for decentralized token trading.
                    </p>

                    <a href="" target="_blank" className="button">Site[Coming Soon]</a>
                    <a href="" target="_blank" className="button">Code[Coming Soon]</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Card Game</h3>
                    <img src={NFTCardGame} alt="Compound Landing Page" />
                    <p>
                      I'm excitedly developing an NFT card game project, merging blockchain technology with gaming for unique, collectible experiences. 
                      This project involves designing digital cards as non-fungible tokens (NFTs) and creating gameplay mechanics that leverage blockchain for ownership and trading.
                    </p>

                    <a href="" target="_blank" className="button">Site[Coming Soon]</a>
                    <a href="" target="_blank" className="button">Code[Coming Soon]</a>
                </div>

                <div className="projects__card">
                    <h3>CrowdFunding App</h3>
                    <img src={CrowdFundingApp} alt="Aave Landing Page" />
                    <p>
                      I'm in the process of building a Web3 crowdfunding app, revolutionizing fundraising by incorporating decentralized finance (DeFi). 
                      This project aims to empower creators and backers alike with the benefits of blockchain technology, ensuring secure and efficient fundraising campaigns.
                    </p>

                    <a href="" target="_blank" className="button">Site[Coming Soon]</a>
                    <a href="" target="_blank" className="button">Code[Coming Soon]</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;