import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xfE584075888ED2B72C128148a33A09e7B98B57f3'
);

export default instance;
