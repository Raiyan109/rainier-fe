import avatar from '../assets/Avatar.png'
import toggle from '../assets/Toggle button.png'
import downArrow from '../assets/Icon_downArrow.png'

const Navbar = () => {
    return (
        <div className="w-full flex justify-between">
            <h1 className="text-xl text-gray-500 font-medium"> Home</h1>

            <div className='flex justify-center items-center gap-4'>
                {/* Dark mode switch */}
                <img src={toggle} alt="" />
                {/* Profile */}
                <div className='flex justify-center items-center gap-2'>
                    <img src={avatar} alt="" className='w-9 h-9 object-cover' />
                    <img src={downArrow} alt="" className='w-6 h-6 object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;