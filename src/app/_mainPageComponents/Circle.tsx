import Button from '../_globalComponents/Button'

const Circle = () => {
    const circularText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget xd.'
    const letterArray = circularText.split('')

    return (
        <div className=" w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-full flex items-center justify-center select-none relative">
            <Button>
                <h1 className="font-bold">Play</h1>
            </Button>
            <div className="w-full h-full  absolute  top-0 left-0 circleText">
                {letterArray.map((letter: string, i: number) => (
                    <span
                        className=" font-rowdies text-sm sm:text-xl md:text-3xl text-white absolute top-0 left-1/2 origin-bottom pointer-events-none   h-1/2"
                        style={{ rotate: i * 5 + 'deg' }}
                        key={i}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Circle
