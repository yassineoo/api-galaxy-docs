import Link from "next/link";
import Layout from "../components/Layout";
import { useLanguage } from "../hooks/useLanguage";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="indexo">
      <header className="header">
        <Link href="/">
          <>
            <img src="/logos/logo-white-bg.svg" width={48} />
            <span className="brand">Api Galaxy Documentaion</span>
          </>
        </Link>
        <Navigation />
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to API Galaxy Documentation</h1>
          <p>Your comprehensive guide to mastering our API ecosystem.</p>
          <img
            src="/logos/logo-white-bg.svg"
            width={120}
            alt="API Galaxy Logo"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>🚀 Quick Start</h2>
          <p>Get up and running in no time with our quick start guide.</p>
        </div>
        <div className="feature">
          <h2>📚 Extensive Guides</h2>
          <p>Deep dive into detailed documentation, tutorials, and examples.</p>
        </div>
        <div className="feature">
          <h2>💬 Community Support</h2>
          <p>Join our community forums and get help from fellow developers.</p>
        </div>
        <div className="feature">
          <h2>🔧 API Reference</h2>
          <p>Explore our API endpoints with comprehensive references.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Journey Now</h2>
        <p>
          Discover the full potential of our APIs and build something amazing
          today.
        </p>
        <Link href="/docs/getting-started">
          <span className="cta-button"> Get Started </span>
        </Link>
        <span></span>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);

          padding-top: 50px;
          color: white;
          text-align: center;
          padding: 150px 0;
        }

        .hero-content img {
          margin-top: 20px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 40px 20px;
          text-align: center;
        }

        .feature {
          background: #f4f4f4;
          padding: 20px;
          border-radius: 8px;
          transition: transform 0.2s ease-in-out; /* Add smooth transition */
        }

        .feature:hover {
          transform: scale(1.1); /* Use transform to scale the element */
        }

        .cta {
          text-align: center;
          margin: 40px 0;
          color: white;
        }

        .cta-button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }

        .cta-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
