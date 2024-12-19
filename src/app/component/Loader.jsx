
import { ClimbingBoxLoader, PuffLoader } from 'react-spinners';

const Loader = ({ loading }) => {


    return (
        <div className='h-full flex justify-center items-center w-full'>

            <ClimbingBoxLoader
                color={'#ebad00'}
                loading={loading}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader