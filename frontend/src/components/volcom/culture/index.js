import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const Culture = props => {
    const navigate = useNavigate();
    return (
        <div className="culture">
            <div className='offer'>
                <div className='container'>
                    <hr className='one left-wrapper' />
                    <p className='two font-montserrat'>
                        <b>We the Culture and Volcom</b>  helped forge the future of the metaverse with the development of Volcom’s Stoneland ecosystem. This is an ecosystem that includes a complete metaverse experience, NFT collections, and community happenings. Inside this ecosystem, participants experience unique holder events, NFT drops, virtual experiences, real life utility, and much more. We The Culture powered the infrastructure behind this project in order for it to become a reality. Technological tasks such as character design, gameplay development, blockchain contracts, and everything else in-between were completed by the We The Culture team.
                        <br /><br />
                        We The Culture helped Volcom become one of the few major brands to take a step into the Web3 world. We created the web3 industry standard using our professional resources and experience. Currently, Stoneland is one of the first projects that has a functioning metaverse with real-world utility. Participants in our ecosystem get exclusive access to this metaverse, which includes special perks and rewards. Stoneland is completely customizable and can be used in a variety of ways to drive revenue for Volcom and add new customer experiences.
                        <br /><br />
                        The Volcom Stoneland project continues to be developed every day by our team. We are constantly adding new features and optimizing for the best possible user experience. There is still so much to be built, meaning this is only the beginning of this innovative project.<br /><br />
                        <ul>
                            <li>Services We The Culture provided Volcom Stoneland:</li>

                            <li>Two completely unique NFT collections</li>

                            <li>A fully built out Metaverse experience</li>

                            <li> A NFT drop completely done within the metaverse</li>

                            <li>Services for blockchain smart contracts in their entirety</li>

                            <li>Community management</li>

                            <li>Community growth by over 500% in 2 months</li>

                            <li>Website design and content creation</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Culture;
