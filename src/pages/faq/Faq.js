import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCurrentUser } from '../../actions/user';
import { setNavbarTitle } from '../../helpers/navbar';
import NavbarV5 from '../../components/global-components/navbar-v5';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';

const Faq = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [navHeader, setNavHeader] = useState('');
  const publicUrl = process.env.PUBLIC_URL + '/';

  useEffect(() => {
    getCurrentUser().then((user) => {
      setNavbarTitle(user, setCurrentUser, setNavHeader);
    });
  }, []);

  return (
    <div>
      <NavbarV5 header={navHeader} user={currentUser} />
      <PageHeader headertitle="Frequenty Asked Questions" customclass="mb-0" />

      <div className="ltn__faq-area mb-90 mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Smart Crowd Wiki
                </h6>
                <h1 className="section-title">Introduction to Blockchain</h1>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      What is a blockchain?
                    </h6>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          A blockchain is a decentralized database that is
                          shared among computer network nodes. A blockchain acts
                          as a database, storing information in a digital
                          format. Blockchains are well known for their critical
                          role in keeping a secure and decentralized record of
                          transactions in cryptocurrency systems like Bitcoin
                          and Ethereum. The blockchain's novelty is that it
                          ensures the fidelity and security of a data record
                          while also generating trust without the requirement
                          for a trusted third party.
                          <ul>
                            <li>
                              Blockchain is a type of shared database that
                              differs from traditional databases in the way it
                              is stored: data is stored in blocks, which are
                              then connected together via cryptography.
                            </li>
                            <li>
                              As new information is received, it is entered into
                              a new block. Once the block has been filled with
                              data, it is chained onto the previous block,
                              forming a chronological chain of data.
                            </li>
                            <li>
                              A blockchain can hold a variety of data, but the
                              most prevalent application so far has been as a
                              transaction ledger.
                            </li>
                            <li>
                              In the case of Bitcoin, blockchain is employed in
                              a decentralized manner, meaning that no single
                              person or group has power—rather, all users have
                              control collectively.
                            </li>
                            <li>
                              Decentralized blockchains are immutable, meaning
                              that the data inputted cannot be changed. This
                              means that transactions in Bitcoin are forever
                              recorded and accessible to everybody.
                            </li>
                            <li>
                              Blockchain technology is also exciting because it
                              has many uses beyond cryptocurrency.
                            </li>
                            <li>
                              Blockchains are being used to explore medical
                              research, improve the accuracy of healthcare
                              records, streamline supply chains, IoT, Real
                              Estate and so much more.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      Top benefits of Blockchain
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          In fact, whether employing a public blockchain network
                          or private or permissioned blockchain-based apps,
                          blockchain and its properties can give many benefits
                          to enterprises.
                          <ul>
                            <li>
                              <b>Trust:</b> Where trust is either non-existent or
                              unproven, blockchain generates trust amongst
                              multiple entities. As a result, these businesses
                              are willing to engage in transactions or data
                              sharing that they might not have done otherwise or
                              that would have required the use of an
                              intermediary.
                            </li>
                            <li>
                              <b>Reduced costs:</b> The nature of blockchain can also
                              help businesses save money. It improves
                              transaction processing efficiency. It also
                              simplifies reporting and auditing operations by
                              reducing manual duties such as data aggregation
                              and amendment.
                            </li>
                            <li>
                              <b>Speed:</b> Blockchain can handle transactions
                              substantially faster than traditional techniques
                              since it eliminates intermediaries and replaces
                              remaining human processes in transactions. In some
                              situations, a transaction on the blockchain can be
                              completed in seconds or less.
                            </li>
                            <li>
                              Immutability: Immutability basically means that
                              transactions can't be modified or deleted after
                              they've been recorded on the blockchain. All
                              transactions on the blockchain are timestamped and
                              date-stamped, resulting in a permanent record.
                            </li>
                            <li>
                              Tokenization: Tokenization is the process of
                              converting the value of a real or digital asset
                              into a digital token, which is then stored on and
                              shared via blockchain.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      What is the mechanism behind blockchain?
                    </h6>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The purpose of blockchain is to enable for the
                          recording and distribution of digital data without the
                          ability to modify it. In this sense, a blockchain
                          serves as the foundation for immutable ledgers, or
                          transaction records that can't be changed, erased, or
                          destroyed. Blockchains are also known as distributed
                          ledger technology because of this (DLT). The
                          blockchain concept was first presented as a research
                          project in 1991, and it before its first popular use
                          in use, Bitcoin, in 2009. The creation of numerous
                          cryptocurrencies, decentralized finance (DeFi)
                          applications, non-fungible tokens (NFTs), and smart
                          contracts has skyrocketed the use of blockchains in
                          the years thereafter.
                          <ul>
                            <li>
                              <b>Step 1</b> A transaction is requested by
                              someone. Cryptocurrency, contracts, records, or
                              other information could be involved in the
                              transaction.
                            </li>
                            <li>
                              <b>Step 2</b> With the help of nodes, the
                              requested transaction is broadcasted to a P2P
                              network.
                            </li>
                            <li>
                              <b>Step 3</b> Using well-known techniques, the
                              network of nodes confirms/validate the transaction
                              and the user's status.
                            </li>
                            <li>
                              <b>Step 4</b> The new block is then added to the
                              existing blockchain after the transaction is
                              complete. In a way that is both permanent and
                              unchangeable.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      Blockchain versions
                    </h6>
                    <div
                      id="faq-item-2-4"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          <b>Blockchain 1.0 Currency:</b> The use of DLT
                          (distributed ledger technology) led to the earliest
                          and most visible use of the technology:
                          cryptocurrencies. This makes it possible to conduct
                          financial transactions using blockchain technology.
                          It's a money and a payment system. The most well-known
                          example in this category is Bitcoin.
                        </p>
                        <p>
                          <b>Blockchain 2.0 Smart Contracts:</b>
                          Smart Contracts, which are little computer programs
                          that "live" in the blockchain, are the next essential
                          principles. They are open-source computer programs
                          that run in the background and check for criteria such
                          as facilitation, verification, and enforcement. It's a
                          contract that's utilised to replace regular contracts.
                        </p>
                        <p>
                          <b>Blockchain 3.0 DApps:</b> The term "decentralized
                          application" is abbreviated as "DApps." Its backend
                          code is distributed throughout a decentralized
                          peer-to-peer network. A DApp, like a standard App, can
                          have frontend Blockchain example code and user
                          interfaces written in any language that can call its
                          backend.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      Who invented the blockchain?
                    </h6>
                    <div
                      id="faq-item-2-5"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          In late 2008, Nakamoto published a whitepaper
                          detailing the principles behind Bitcoin, a new type of
                          digital currency. Since then, every cryptocurrency
                          (Bitcoin or Altcoin) has evolved from the ideas
                          outlined in that paper. Nakamoto's goal was to create
                          digital money that would allow two strangers anywhere
                          in the world to transact online without the need for a
                          third-party intermediary such as a credit card company
                          or a payment processor like Paypal. This necessitated
                          a system that would remove a vexing problem known as
                          "double spending," in which a person may spend the
                          same money multiple times. The solution is a network
                          that constantly verifies Bitcoin's travel. The
                          blockchain is that network. Every Bitcoin transaction
                          is stored and verified by a global network of
                          computers that is independent of any individual,
                          business, or country. The blockchain is the database
                          that stores all of this information. Bitcoins are
                          mined through a massive, decentralized (also known as
                          peer-to-peer) network of computers that is constantly
                          verifying and securing the blockchain's accuracy.
                          Miners are rewarded with small amounts of
                          cryptocurrency in exchange for contributing their
                          computing power to the blockchain. Every single
                          bitcoin transaction is recorded on the ledger, with
                          fresh information periodically accumulated in a
                          "block" that is added to the previous blocks. The
                          miners' combined computational power is used to ensure
                          the ledger's accuracy as it grows. Bitcoin cannot
                          exist without the blockchain; every new bitcoin, as
                          well as every subsequent transaction involving all
                          existing currencies, is recorded on it.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      What does the future hold for blockchain technology?
                    </h6>
                    <div
                      id="faq-item-2-6"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The blockchain concept has proven to be a foundation
                          on which a wide range of applications can be built.
                          Although blockchain is still a young and fast evolving
                          technology, many experts have compared its potential
                          to transform the way we live and work to that of
                          public internet protocols like HTML in the early days
                          of the World Wide Web. The global cryptocurrency
                          market cap reached $3 trillion at the end of 2021, an
                          all-time high. Blockchain technology underpins
                          cryptocurrencies such as Bitcoin and Ethereum. The
                          adoption of blockchain, as well as the technology and
                          products that it supports, will continue to have a
                          significant impact on company operations. However,
                          blockchain technology is much more than a mechanism
                          for sending and receiving cryptocurrency in a safe
                          manner. It can be utilized in a variety of
                          applications outside of finance, including healthcare,
                          real estate, insurance, voting, social benefits,
                          gaming, green energy, and artist royalties. The global
                          economy is prepared for the blockchain revolution,
                          with technology already having an impact on business
                          and society on many levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  {/* <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-7"
                      aria-expanded="false"
                    >
                      How do I make payment by my credit card
                    </h6>
                    <div
                      id="faq-item-2-7"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Scelerisque eleifend donec
                          pretium vulputate sapien nec sagittis. Proin libero
                          nunc consequat interdum. Condimentum lacinia quis vel
                          eros donec ac. Mauris sit amet massa vitae tortor.
                          Quisque id diam vel quam elementum pulvinar. Gravida
                          in fermentum et sollicitudin ac orci phasellus.
                          Facilisis gravida neque convallis a cras semper. Non
                          arcu risus quis varius quam quisque id.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="need-support text-center mt-100">
                  <h2>Still need help? Reach out to support 24/7:</h2>
                  <div className="btn-wrapper mb-30 go-top">
                    <Link to="/contact" className="theme-btn-1 btn">
                      Contact Us
                    </Link>
                  </div>
                  <h3>
                    <i className="fas fa-phone" /> +0123-456-789
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
