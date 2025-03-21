import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";
import wallet from "./assets/wallet.png";
import qr from "./assets/scan.png";
import menu from "./assets/menu.png";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("wallet");

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onLogin = useCallback(() => {
    "background only";
    setIsLoggedIn(true);
  }, []);

  const onLogout = useCallback(() => {
    "background only";
    setIsLoggedIn(false);
  }, []);

  const onActivity = useCallback(() => {
    "background only";
    setCurrentPage("activity");
  }, []);

  const onWallet = useCallback(() => {
    "background only";
    setCurrentPage("wallet");
  }, []);

  const onInvest = useCallback(() => {
    "background only";
    setCurrentPage("invest");
  }, []);

  const onSettings = useCallback(() => {
    "background only";
    setCurrentPage("settings");
  }, []);

  function MainPage() {
    return (
      <view className="Dashboard">
        <view className="topBar">
          <view className="navbar">
            <text className="nav-inactive" bindtap={onActivity}>
              activity
            </text>
            <text className="nav-active">wallet</text>
            <text className="nav-inactive" bindtap={onInvest}>
              invest
            </text>
            <text className="nav-inactive" bindtap={onSettings}>
              settings
            </text>
          </view>
        </view>
        <view>
          <view className="balance">
            <text className="balance-text" id="balance">
              $221.48
            </text>
            <text className="nav-inactive">your balance</text>
          </view>
          <view className="wallet-bar">
            <view style={{ display: "flex", gap: "8px" }}>
              <view
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <view className="round-btn">
                  <text className="btn-text">+</text>
                </view>
                <view className="round-btn">
                  <image src={qr} style={{ width: "32px", height: "32px" }} />
                </view>
              </view>
              <view
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <view className="round-btn">
                  <text className="btn-text">↗</text>
                </view>
                <view className="round-btn">
                  <text className="btn-text">⇄</text>
                </view>
              </view>
            </view>
            <view
              style={{ display: "flex", gap: "8px", flexDirection: "column" }}
            >
              <view className="round"></view>
              <view className="round-btn">
                <image src={menu} style={{ width: "32px", height: "32px" }} />
              </view>
            </view>
          </view>
        </view>
      </view>
    );
  }

  function ActivityPage() {
    return (
      <view className="Dashboard">
        <view className="topBar">
          <view className="navbar">
            <text className="nav-active">activity</text>
            <text className="nav-inactive" bindtap={onWallet}>
              wallet
            </text>
            <text className="nav-inactive" bindtap={onInvest}>
              invest
            </text>
            <text className="nav-inactive" bindtap={onSettings}>
              settings
            </text>
          </view>
        </view>
        <view>
          <view className="balance">
            <text className="nav-inactive">your transactions</text>
          </view>
          <view className="transactions">
            <view className="transaction-card">
              <view className="transaction-card-header">
                <text className="transaction-card-title">IRS</text>
                <text className="transaction-card-date">17 Mar 2025</text>
              </view>
              <view className="transaction-card-body">
                <text className="transaction-card-description">Tax.</text>
                <text className="transaction-card-amount" id="debit">
                  $112,374.49
                </text>
              </view>
            </view>
            <view className="transaction-card">
              <view className="transaction-card-header">
                <text className="transaction-card-title">Mom</text>
                <text className="transaction-card-date">13 Mar 2025</text>
              </view>
              <view className="transaction-card-body">
                <text className="transaction-card-description">
                  Tiffany & Co.
                </text>
                <text className="transaction-card-amount" id="credit">
                  $10,000.00
                </text>
              </view>
            </view>
            <view className="transaction-card">
              <view className="transaction-card-header">
                <text className="transaction-card-title">M. G. Joshi</text>
                <text className="transaction-card-date">12 Mar 2025</text>
              </view>
              <view className="transaction-card-body">
                <text className="transaction-card-description">iPhone</text>
                <text className="transaction-card-amount" id="debit">
                  $1,199.99
                </text>
              </view>
            </view>

            <view className="transaction-card">
              <view className="transaction-card-header">
                <text className="transaction-card-title">Dragon</text>
                <text className="transaction-card-date">09 Mar 2025</text>
              </view>
              <view className="transaction-card-body">
                <text className="transaction-card-description">
                  Nuevo Membership Interest
                </text>
                <text className="transaction-card-amount" id="credit">
                  $7,999.99
                </text>
              </view>
            </view>
            <view className="transaction-card">
              <view className="transaction-card-header">
                <text className="transaction-card-title">Elon Musk</text>
                <text className="transaction-card-date">09 Mar 2025</text>
              </view>
              <view className="transaction-card-body">
                <text className="transaction-card-description">
                  SpaceX Fund
                </text>
                <text className="transaction-card-amount" id="credit">
                  $400,000.00
                </text>
              </view>
              {/* <view className="transaction-card-footer">
                <text className="transaction-card-status">Pending</text>
              </view> */}
            </view>
          </view>
        </view>
      </view>
    );
  }

  function InvestPage() {
    return (
      <view className="Dashboard">
        <view className="topBar">
          <view className="navbar">
            <text className="nav-inactive" bindtap={onActivity}>
              activity
            </text>
            <text className="nav-inactive" bindtap={onWallet}>
              wallet
            </text>
            <text className="nav-active">invest</text>
            <text className="nav-inactive" bindtap={onSettings}>
              settings
            </text>
          </view>
        </view>
        <view>
          <view className="balance">
            <text className="balance-text">$54,243.78</text>
            <text className="nav-inactive">investment portfolio</text>
          </view>

          <view className="chart-container">
            <view className="chart-header">
              <text className="chart-title">Performance</text>
              <view className="chart-legend">
                <view className="legend-item">
                  <view className="legend-color" id="btc-color"></view>
                  <text className="legend-text">BTC</text>
                </view>
                <view className="legend-item">
                  <view className="legend-color" id="eth-color"></view>
                  <text className="legend-text">ETH</text>
                </view>
                <view className="legend-item">
                  <view className="legend-color" id="portfolio-color"></view>
                  <text className="legend-text">Total</text>
                </view>
              </view>
            </view>
            <view className="chart">
              <view className="chart-line" id="btc-line"></view>
              <view className="chart-line" id="eth-line"></view>
              <view className="chart-line" id="portfolio-line"></view>
            </view>
            <view className="chart-timeframe">
              <text className="timeframe-option active">1D</text>
              <text className="timeframe-option">1W</text>
              <text className="timeframe-option">1M</text>
              <text className="timeframe-option">1Y</text>
              <text className="timeframe-option">ALL</text>
            </view>
          </view>

          <view className="portfolio-container">
            <text className="section-title">Your Assets</text>

            <view className="investment-card">
              <view className="investment-icon btc-icon">₿</view>
              <view className="investment-details">
                <view>
                  <text className="investment-name">Bitcoin</text>
                  <text className="investment-symbol">BTC</text>
                </view>
                <view className="investment-value-container">
                  <text className="investment-value">$86.153</text>
                  <text className="investment-change negative">-0.70%</text>
                </view>
              </view>
            </view>

            <view className="investment-card">
              <view className="investment-icon eth-icon">Ξ</view>
              <view className="investment-details">
                <view>
                  <text className="investment-name">Ethereum</text>
                  <text className="investment-symbol">ETH</text>
                </view>
                <view className="investment-value-container">
                  <text className="investment-value">$21,36.10</text>
                  <text className="investment-change negative">-0.22%</text>
                </view>
              </view>
            </view>

            <view className="investment-card">
              <view className="investment-icon sol-icon">◎</view>
              <view className="investment-details">
                <view>
                  <text className="investment-name">Solana</text>
                  <text className="investment-symbol">SOL</text>
                </view>
                <view className="investment-value-container">
                  <text className="investment-value">$138.570</text>
                  <text className="investment-change negative">-0.54%</text>
                </view>
              </view>
            </view>
          </view>

          <view className="actions-container">
            <view className="action-button">
              <text className="action-icon">+</text>
              <text className="action-text">Buy</text>
            </view>
            <view className="action-button">
              <text className="action-icon">↗</text>
              <text className="action-text">Sell</text>
            </view>
            <view className="action-button">
              <text className="action-icon">⇄</text>
              <text className="action-text">Swap</text>
            </view>
          </view>
        </view>
      </view>
    );
  }

  function SettingsPage() {
    return (
      <view className="Dashboard">
        <view className="topBar">
          <view className="navbar">
            <text className="nav-inactive" bindtap={onActivity}>
              activity
            </text>
            <text className="nav-inactive" bindtap={onWallet}>
              wallet
            </text>
            <text className="nav-inactive" bindtap={onInvest}>
              invest
            </text>
            <text className="nav-active">settings</text>
          </view>
        </view>

        <scroll-view className="settings-scroll-container">
          <view className="settings-container">
            <view className="profile-section">
              <view className="profile-avatar">
                <text className="avatar-initials">AJ</text>
              </view>
              <view className="profile-info">
                <text className="profile-name">Advaith J.</text>
                <text className="profile-email">alphadelta@mit.edu</text>
              </view>
            </view>

            <view className="settings-section">
              <text className="settings-section-title">Account</text>

              <view className="settings-item">
                <view className="settings-icon account-icon">👤</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">
                    Personal Information
                  </text>
                  <text className="settings-item-description">
                    Name, email, phone
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>

              <view className="settings-item">
                <view className="settings-icon security-icon">🔒</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Security</text>
                  <text className="settings-item-description">
                    Password, 2FA, biometrics
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>

              <view className="settings-item">
                <view className="settings-icon payment-icon">💳</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Payment Methods</text>
                  <text className="settings-item-description">
                    Cards, accounts
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>
            </view>

            <view className="settings-section">
              <text className="settings-section-title">Preferences</text>

              <view className="settings-item">
                <view className="settings-icon notifications-icon">🔔</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Notifications</text>
                  <text className="settings-item-description">
                    Push, email, SMS
                  </text>
                </view>
                <view className="toggle-switch active"></view>
              </view>

              <view className="settings-item">
                <view className="settings-icon appearance-icon">🎨</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Appearance</text>
                  <text className="settings-item-description">
                    Dark mode, theme
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>

              <view className="settings-item">
                <view className="settings-icon language-icon">🌐</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Language</text>
                  <text className="settings-item-description">
                    English (US)
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>
            </view>

            <view className="settings-section">
              <text className="settings-section-title">About</text>

              <view className="settings-item">
                <view className="settings-icon help-icon">❓</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Help & Support</text>
                  <text className="settings-item-description">
                    FAQ, contact us
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>

              <view className="settings-item">
                <view className="settings-icon privacy-icon">📜</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">Legal & Privacy</text>
                  <text className="settings-item-description">
                    Terms, privacy policy
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>

              <view className="settings-item">
                <view className="settings-icon about-icon">ℹ️</view>
                <view className="settings-item-content">
                  <text className="settings-item-title">About Wallet</text>
                  <text className="settings-item-description">
                    Version 1.0.3
                  </text>
                </view>
                <text className="settings-item-action">›</text>
              </view>
            </view>

            <view className="logout-button-container">
              <view className="logout-button" bindtap={onLogout}>
                <text className="logout-button-text">Log Out</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    );
  }

  if (!isLoggedIn) {
    return (
      <view>
        <view className="App">
          <view className="Banner">
            <view className="Logo">
              <image src={wallet} className="Logo--react" />
            </view>
            <text className="Title" style={{ fontFamily: "IBM Plex Sans" }}>
              Wallet
            </text>
          </view>
          <view className="Content">
            <view className="btn" bindtap={onLogin}>
              <text className="btn-text">Login</text>
            </view>
          </view>
          <view style={{ flex: 1 }}></view>
        </view>
      </view>
    );
  }

  // Return the appropriate page based on currentPage state
  return (
    <view>
      {currentPage === "wallet" ? (
        <MainPage />
      ) : currentPage === "activity" ? (
        <ActivityPage />
      ) : currentPage === "invest" ? (
        <InvestPage />
      ) : (
        <SettingsPage />
      )}
    </view>
  );
}
