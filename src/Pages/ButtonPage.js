import {GoBell , GoCloudDownload , GoDatabase} from 'react-icons/go'
import Button from '../Components/Button'

function ButtonPage(){
 
   return (
    <div>
        <div>
        <Button secondary outline rounded >
            <GoBell/>
             click me !!
             </Button>
        </div>
        <div>
        <Button danger outline >
            <GoCloudDownload/>
             Buy Now!
             </Button>
        </div>
        <div>
        <Button warning>
        <GoDatabase/>
        See Deal! </Button>
        </div>
        <div>
        <Button secondary outline>
             Hide Ads! </Button>
        </div>
        <div>
        <Button primary rounded>
             Something! </Button>
        </div>
           </div>)
}
export default ButtonPage