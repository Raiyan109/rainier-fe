import heroImg from '../assets/Svg_sample1.png'
import heart from '../assets/Icon_Heart.png'
import bloodSuger from '../assets/Icon_Blood_sugar.png'
import bubble from '../assets/Icon_bubble.png'
import bloodPressure from '../assets/Icon_Blood_pressure.png'
import vector from '../assets/Vector.png'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Hero = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    const cardsData = [
        {
            icon: heart,
            name: 'Pulse Count',
            count: '60 bpm',
            status: 'Normal'
        },
        {
            icon: bloodPressure,
            name: 'Blood Pressure',
            count: '110/70 mmHg',
            status: 'Slightly Higher'
        },
        {
            icon: bubble,
            name: 'Oxygen Saturation',
            count: '97 %',
            status: 'Slightly Higher'
        },
        {
            icon: bloodSuger,
            name: 'Glucose Count',
            count: '100 mm/dL',
            status: 'Normal'
        },
    ]
    return (
        <div>
            <div className="hero-bg py-6 px-3 my-3 flex justify-between items-center rounded-lg">
                <img src={heroImg} alt="" />
                <div className='text-white space-y-4'>
                    <h1 className='text-2xl font-semibold'>Hello, Mary Jane!</h1>
                    <h1 className='text-lg font-normal'>Stay Up-to-Date with your appointments.</h1>
                    <h1 className='text-lg font-normal'>You Have No pending Reports</h1>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-7'>
                    {cardsData.map((data, i) => (
                        <div key={i} className='shadow-lg rounded-md bg-white p-3 space-y-2'>
                            <img src={data.icon} alt="" />
                            <h2 className='font-medium'>{data.name}</h2>
                            <h1 className='text-xl'>{data.count}</h1>
                            <div className='flex items-center gap-2'>
                                <img src={vector} alt="" />
                                <h3 className={data.status === 'Normal' ? 'text-green-700 font-medium' : 'text-[#82AB0D] font-medium'}>{data.status}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ReactLenis root>
                { /* content */}
            </ReactLenis>
        </div>
    );
};

export default Hero;