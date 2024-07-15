import Button from '../_globalComponents/Button'

const Circle = () => {
    const circularText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget xd.'
    const letterArray = circularText.split('')

    return (
        <div className=" w-64 h-64 sm:w-96 sm:h-96 rounded-full flex items-center justify-center select-none relative">
            <Button>
                <h1 className="font-bold">Play</h1>
            </Button>
            <div className="w-full h-full  absolute  top-0 left-0 circleText">
                {letterArray.map((letter: string, i: number) => (
                    <span
                        className=" font-rowdies text-2xl text-white absolute top-0 left-1/2 origin-bottom pointer-events-none   h-1/2"
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
