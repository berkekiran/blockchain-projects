import React, { useState, useRef } from "react";
import { motion } from 'framer-motion/dist/framer-motion';

export default function TermsAndConditions() {

    return (
        <React.Fragment>
            <motion.div key="termsAndConditionsPage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 1 }}>
                <div className="wrapper">
                    <div className="menubarcontainertermsandconditions">
                        <a data-aos="zoom-in" className="logoTermsAndConditions" href="/">
                            <img src="/media/icons/simulacra_society_logo.svg"/>
                        </a>
                    </div>

                    <section className="termsandconditions-section">
                        <img className="blobs blob1TermsAndConditions" src="/media/blobs/blob1.webp"/>
                        <img className="incubationPodImageTermsAndConditions" src="/media/incubationPod/incubationPodHigh.webp"/>
                        <h1 data-aos="fade-up" data-aos-delay="150">Terms & Conditions</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            This website is operated by Simulacra Society. Throughout the site, the term (Simulacra Society), (we), (us) or (our) as the context may require, 
                            refer to Simulacra Society or Incubation Pods. By visiting our site and/or purchasing something from us, you engage in our Service and agree to be bound 
                            by the following terms and conditions.
                            <br/><br/>
                            We reserve the right to update, change or replace any part of these Terms of services without prior written notice at any time, and it is your responsibility to periodically 
                            review these Terms of Uses to stay informed of updates. Any changes to the Terms will be in effect as of the (last updated) referenced on the site.
                            <br/><br/>
                            Your continued use of this site after the last updated dates will constitute your acceptance of agreement.
                            <br/><br/>
                            The Simulacra Society Is a collection of NFTs (digital artworks) running on the Ethereum blockchain. This website is only an interface allowing participants to exchange digital
                            collectibles. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by this 
                            website before approval. In addition, as the Simulacra Society smart contract runs on the Ethereum blockchain, there is no ability to undo, reverse, or restore any transactions.
                            <br/><br/>
                            This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for 
                            any and all transactions involving the Simulacra Society NFTs (digital collectibles). You may not use our products and/or services for any illegal or unauthorized purpose 
                            nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                            <br/><br/>
                            You own your NFT. Each Incubation Pod is an NFT on the Ethereum blockchain. When you purchase an NFT, you own the underlying asset, the Incubation Pod, fine art JPEG. Ownership 
                            of the NFT is being transferred entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any NFT
                            Personal Usage. 
                            <br/><br/>
                            Subject to your continued compliance with these Terms, The Simulacra Society grants you a worldwide, royalty-free license to use, copy, and display the purchased Art, along 
                            with any extensions that you choose to create or use, solely for the following purposes: (a) for your own personal, non-commercial use; (b) as part of a marketplace that permits 
                            the purchase and sale of your Incubation Pod (NFT), provided that the marketplace cryptographically verifies each NFT owner’s rights to display the Art for their Incubation Pod to ensure that
                            only the actual owner can display the Art, or (c) as part of a third party website or application that permits the inclusion, involvement, or participation of your NFT, provided 
                            that the application/website cryptographically verifies each NFT  owner’s rights to display the Art for their NFT  to ensure that only the actual owner can display the Art, and
                            provided that the Art is no longer visible once the owner of the NFT  leaves the application/website
                            Commercial Use Rights. 
                            <br/><br/>
                            Subject to your continued compliance with these Terms, Simulacra Society grants you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose 
                            of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products 
                            (Hoodies, Caps etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (a) owning or operating a marketplace 
                            that permits the use and sale of Simulacra Society generally, provided that the marketplace cryptographically verifies each NFT  owner’s rights to display the Art for their 
                            Incubation Pod to ensure that only the actual owner can display the Art, (b) owning or operating a third party website or application that permits the inclusion, involvement, or 
                            participation of Simulacra Society generally, provided that the third party website or application cryptographically verifies each NFT owner’s rights to display the Art for 
                            their Incubation Pod to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Incubation Pod leaves the 
                            application/website, or (c) earning revenue from any of the foregoing.
                            <br/><br/>
                            Other than the rights to the Art, nothing gives you any rights to any other trademarks or other intellectual property rights belonging to the Simulacra Society including, 
                            without limitation Simulacra Society, S Society, and the associated logos. All of these rights are expressly reserved in the name of Simulacra Society.
                            <br/><br/>
                            Further, Simulacra Society reserve the rights to use ANY character, including: print or digital advertising, or any purely creative media (including short film, promotions, etc.) 
                            in support of the Simulacra Society community and message.  However, you cannot use the artwork in connection with images of hatred, violence or any other inappropriate behavior. 
                            The License granted in above only applies to the extent that you continue to own the relevant NFT. If at any time you trade, donate, giveaway, transfer or otherwise dispose of your 
                            NFT for any reason, the license granted above will immediately expire, without notice, and you will have no further right in or to the artwork of this NFT.
                            <br/><br/>
                            You can submit comments, bug reports, ideas about the site or the Simulacra Society venture. By submitting any feedback, you agree that we are free to use them in any way we 
                            choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive worldwide license to incorporate and use the feedback for any purpose.
                            </p>
                    </section>

                    <section className="footer-section">
                        <div className="footersectioncontent">
                            <div className="footersectioninfo">
                                <a data-aos="fade-up" href="/home">Back to Home Page</a>
                                <span data-aos="fade-up" data-aos-delay="100">© 2022 Simulacra Society</span>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </React.Fragment>
    )
}