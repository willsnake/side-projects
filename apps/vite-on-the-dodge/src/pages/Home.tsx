import { useState, useEffect } from 'react'
import { subMinutes, addDays, format } from 'date-fns'

import Form from '../components/Form'
import Button from '../components/Button'
import { calculateTimeLeft } from '../utils'

const Home = () => {
  const [dateSelected, setDateSelected] = useState<Date>(new Date())
  const [userDodge, setUserDodge] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dateSelected))
    }, 1000)

    return () => clearTimeout(timer)
  })

  const handleSubmit = (minutesOfDifference: number) => {
    const initialDate = subMinutes(new Date(), minutesOfDifference)
    setUserDodge(true)
    setDateSelected(initialDate)
  }

  const handleReset = () => {
    setUserDodge(false)
    setDateSelected(new Date())
    setTimeLeft(calculateTimeLeft())
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <section className="p-6 flex-1 flex flex-col justify-between text-center">
        <div className="max-w-xl mx-auto flex flex-col justify-center flex-1 space-y-10">
          {!userDodge ? (
            <>
              <h1>Can I Dodge?</h1>
              <h2>
                Click the button below when you dodge and check back here to see when you
                can dodge again.
              </h2>
              <Form onSubmit={handleSubmit} />
            </>
          ) : (
            <>
              <h1>You Can't Dodge!</h1>
              <h2>Your Dodge Will Reset In</h2>
              <h3>
                {timeLeft.hours} Hours
                {timeLeft.minutes} Minutes
                {timeLeft.seconds} Seconds
              </h3>
              <h3>{format(addDays(dateSelected, 1), 'MM/dd/Y h:m:s aaa')}</h3>
              <h4>
                You can leave and come back when you want to check how long until you can
                dodge again
              </h4>
              <Button
                className="rounded-lg bg-purple-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 mt-4"
                disabled={false}
                onClick={handleReset}
                type="button"
              >
                Reset
              </Button>
              <h5>
                If you dodge again you will lose 10LP and be locked out of queue for 30
                minutes.
              </h5>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
