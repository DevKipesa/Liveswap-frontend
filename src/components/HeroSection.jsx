import React, { useState } from "react";
import search from "../assets/icons/search.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";
import DiscordIcon from "../assets/icons/discord.svg";
import hero from "../assets/hero.svg";

const dummyCryptos = [
  "Bitcoin",
  "Ethereum",
  "Ripple",
  "Litecoin",
  "Cardano",
  "Polkadot",
  "Chainlink",
  "Dogecoin",
  "Solana",
  "Avalanche"
];

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setFilteredCryptos([]);
      return;
    }

    const filtered = dummyCryptos.filter(crypto =>
      crypto.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            The <span className="highlighted">Decentralized</span> Cross-Chain
            Exchange
          </h1>
          <p className="hero-info-description">
            Liveswap is a web3 project that facilitates seamless asset swapping on blockchain networks. By leveraging smart contracts, it aims to enhance liquidity and enable users to trade digital assets quickly and securely without intermediaries.
          </p>
          <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="search-btn primary">
              <span className="start-swapping">Start Swapping</span>
            </button>
          </div>
          {filteredCryptos.length > 0 && (
            <ul className="crypto-suggestions">
              {filteredCryptos.map((crypto, index) => (
                <li key={index}>{crypto}</li>
              ))}
            </ul>
          )}
          <div className="social-links-container">
            <div className="social-links">
              <a href="/">
                <img src={TelegramIcon} alt="Telegram" />
              </a>
              <a href="/">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="/">
                <img src={YouTubeIcon} alt="YouTube" />
              </a>
              <a href="/">
                <img src={DiscordIcon} alt="Discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-img" src={hero} alt="blockchain" />
      </div>
    </div>
  );
};

export default HeroSection;
